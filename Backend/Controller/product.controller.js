import mongoose from "mongoose";
import Product from "../Beans/product.bean.js";

// GET all products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({success: true, data: products});
  } catch (error) {
    next(error);
  }
};

// GET one product by ID
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({success: false, message: "Product not found"});
    }
    res.status(200).json({success: true, data: product});
  } catch (error) {
    next(error);
  }
};

// CREATE a product
export const createProduct = async (req, res, next) => {
  try {
    const {name, price, imageUrl, brand, type} = req.body;
    if (!name || !price || !imageUrl || !brand || !type) {
      return res
        .status(400)
        .json({success: false, message: "Please provide all required fields"});
    }
    const newProduct = new Product(req.body);
    await newProduct.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Product added successfully",
        data: newProduct,
      });
  } catch (error) {
    next(error);
  }
};

// UPDATE a product
export const updateProduct = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(404)
        .json({success: false, message: "Invalid product ID"});
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
    res.status(200).json({success: true, data: updatedProduct});
  } catch (error) {
    next(error);
  }
};

// DELETE a product
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({success: true, message: "Product deleted successfully"});
  } catch (error) {
    next(error);
  }
};
