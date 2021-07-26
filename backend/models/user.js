const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// fields needed: name, email, password, avatar, role,  resetPasswordToken,  resetPasswordExpire
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [30, "Your name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Password cannot be less than 6 characters"],
    select: false, // this means when the user is displayed, the password won't be sent along
  },
  avatar: {
    public_id: {
      type: String,
      //   required: true,
    },
    url: {
      type: String,
      //   required: true,
    },
  },
  role: {
    type: String,
    default: "user", // sets the default value of the role
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// compare user password
// function keyword is used instead of arrow function because of the this keyword to access the userSchema properties
userSchema.methods.comparePassword = async function (password) {
  //  bcrypt.compare compares the password from the client with the database
  // this will return a boolean
  return bcrypt.compare(password, this.password);
};

// Return JWT token
// Methods can be set on Schemas to help doing things related to that schema(s), and keeping them well organized.
// the first parameter in the sign is what you want to store as payload in the token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash and set resePasswordToken in the user Schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  console.log(this.resetPasswordExpire);

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
