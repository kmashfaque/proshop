import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//desc fetch all products
//route GET /api/products
//access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//desc fetch single products
//route GET /api/products
//access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

//desc delete a product
//route DELETE /api/products
//access private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
export { getProducts, getProductById, deleteProduct };
