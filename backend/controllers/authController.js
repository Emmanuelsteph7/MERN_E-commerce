const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const cloudinary = require("cloudinary");

// Register new user => api/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  let { name, email, password } = req.body;

  // return an error when no name is sent from client
  if (!name) {
    return next(new ErrorHandler("Please, enter your name", 400));
  }

  // return an error when no email is sent from client
  if (!email) {
    return next(new ErrorHandler("Please, enter your email", 400));
  }

  // return an error when no password is sent from client
  if (!password) {
    return next(new ErrorHandler("Please, enter your password", 400));
  }

  // first check if there is an existing user
  let previousUser = await User.findOne({ email });
  if (previousUser) {
    return next(new ErrorHandler("Email is already registered", 400));
  }

  let cloudinaryResult = {};

  if (req.body.avatar) {
    cloudinaryResult = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150, // setting the size of the image to be saved
      crop: "scale",
    });
  }

  // hash password
  password = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: cloudinaryResult.public_id || "",
      url: cloudinaryResult.secure_url || "",
    },
  });

  sendToken(user, 200, res);
});

// login user => api/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  // console.log("login");
  const { email, password } = req.body;

  // return an error when no email is sent from client
  if (!email) {
    return next(new ErrorHandler("Please, enter your email", 400));
  }

  // return an error when no password is sent from client
  if (!password) {
    return next(new ErrorHandler("Please, enter your password", 400));
  }

  // finding user in database
  // the select method removes the password from the user object that is received
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email", 401));
  }

  // check for correct password
  const passwordVerify = await user.comparePassword(password);

  if (!passwordVerify) {
    return next(new ErrorHandler("Invalid password", 401));
  }

  sendToken(user, 200, res);
});

// Forgot password => api/forgot-password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  if (!req.body.email.trim().length) {
    return next(new ErrorHandler("Please, Enter Email", 404));
  }
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found with this email", 404));
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  console.log(user.resetPasswordExpire);

  // You can disable automatic validation before save by setting the validateBeforeSave option
  await user.save({ validateBeforeSave: false });

  // Create reset password url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/reset-password/${resetToken}`;

  const message = `Your password reset token is as follows:\n\n\n${resetUrl}\n\n\nIf you have not requested this email, then inore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password Recovery Message",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset password => api/reset-password/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const tokenFromUrl = req.params.token;

  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(tokenFromUrl)
    .digest("hex");

  // find user based on the resetPasswordToken
  // Also check if the token has expired => resetPasswordExpire should be greater than the current date
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler("Password reset token is invalid or has expired"),
      400
    );
  }

  // validate password
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match"), 400);
  }

  // setup new password
  user.password = await bcrypt.hash(req.body.password, 10);

  // reset the password token and expire date to undefined
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// logout user => api/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

// Get currently logged in user details/profile => api/profile
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  // This is already stored and gotten using jwt.verify
  const userId = req.user.id;

  const user = await User.findById(userId);

  res.status(200).json({
    success: true,
    user,
  });
});

// Get currently logged in user details/profile => api/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  // This is already stored and gotten using jwt.verify
  const userId = req.user.id;

  const user = await User.findById(userId).select("+password");

  // comparePassword method is attached to the user model
  const isPasswordMatch = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Old password is incorrect"), 400);
  }

  if (req.body.password.length < 6) {
    return next(
      new ErrorHandler("Password cannot be less than 6 characters"),
      400
    );
  }

  // hash new password
  let newPassword = await bcrypt.hash(req.body.password, 10);

  user.password = newPassword;
  await user.save();

  sendToken(user, 200, res);
});

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  let cloudinaryResult = {};

  if (req.body.avatar) {
    cloudinaryResult = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150, // setting the size of the image to be saved
      crop: "scale",
    });
  }

  const newProfile = {
    name: req.body.name,
    email: req.body.email,
    avatar: {
      public_id: cloudinaryResult.public_id,
      url: cloudinaryResult.secure_url,
    },
  };

  const user = await User.findByIdAndUpdate(req.user.id, newProfile, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile successfully updated.",
  });
});

// Admin Controllers

// Get all users => api/admin/users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getSpecificUser = catchAsyncErrors(async (req, res, next) => {
  const user = User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler(`user not found with id: ${req.params.id}`));
  }

  res.status(200).json({
    success: true,
    user,
  });
});
