const express = require("express");
const router = express.Router();

// Controllers
const {
  getProducts,
  createProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../../controllers/productController");
const { isAuthenticated, authorizeRoles } = require("../../middleware/auth");

// GET Get all products
// route => api/products
router.route("/products").get(getProducts);

// GET Get single product
// route => api/product/:id
router.route("/product/:id").get(getSingleProduct);

// POST Post a product
// route => api/admin/product/add
router
  .route("/admin/product/add")
  .post(isAuthenticated, authorizeRoles("user"), createProduct);

// PUT Update single product
// DELETE Delete single product
// route => api/admin/product/:id
router
  .route("/admin/product/:id")
  .put(isAuthenticated, authorizeRoles("admin"), updateSingleProduct)
  .delete(isAuthenticated, authorizeRoles("admin"), deleteSingleProduct);

module.exports = router;
