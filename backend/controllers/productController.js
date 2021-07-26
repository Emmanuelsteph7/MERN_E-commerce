const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

// Get all products in the database => api/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const totalProducts = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product, req.query)
    .search()
    .filter()
    .pagination(4);
  const products = await apiFeatures.query;

  res.status(200).json({
    success: true,
    fetchedProducts: products.length,
    totalProducts,
    products,
  });
});

// Create a product => api/admin/product/add
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let data = req.body;

  req.body.user = req.user.id;

  const newProduct = await Product.create(data);

  res.status(201).json({
    success: true,
    newProduct,
  });
});

// Get single product => api/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update single product => api/admin/product/:id
exports.updateSingleProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete single product => api/admin/product/:id
exports.deleteSingleProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    product,
  });
});
