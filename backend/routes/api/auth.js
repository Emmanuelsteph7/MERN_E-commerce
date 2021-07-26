const express = require("express");
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require("../../middleware/auth");

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getSpecificUser,
  getAllUsers,
} = require("../../controllers/authController");

// POST Register new user
// route => api/register
router.route("/register").post(registerUser);

// POST Forgot Password
// route => api/forgot-password
router.route("/forgot-password").post(forgotPassword);

// PUT Reset Password
// route => api/reset-password/:token
router.route("/reset-password/:token").put(resetPassword);

// POST Login user
// route => api/login
router.route("/login").post(loginUser);

// PUT Change/Update password
// route => api/password/update
router.route("/password/update").put(isAuthenticated, updatePassword);

// GET Get curently logged in user
// route => api/profile
// when this route is called, the isAuthenticated middleware will verify the token and store the user in req.user first
// Then the getUserProfille function will then return the stored user to the client
router.route("/profile").get(isAuthenticated, getUserProfile);

// PUT update user profile
// route => api/profile/update
router.route("/profile/update").put(isAuthenticated, updateProfile);

// GET Get all users by admin
// route => api/admin/users
router
  .route("/admin/users")
  .get(isAuthenticated, authorizeRoles("admin"), getAllUsers);

// GET Get specific user profile by admin
// route => api/admin/user/:id
router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorizeRoles("admin"), getSpecificUser);

// GET Logout user
// route => api/logout
router.route("/logout").get(logoutUser);

module.exports = router;
