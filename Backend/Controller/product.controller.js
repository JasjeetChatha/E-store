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

// CREATE a product with optional image upload
export const createProduct = async (req, res, next) => {
  try {
    const {name, price, brand, type, rating, desc} = req.body;
    
    // Check required fields (matching your schema)
    if (!name || !price || !brand || !type || !rating) {
      return res
        .status(400)
        .json({success: false, message: "Please provide all required fields (name, price, brand, type, rating)"});
    }

    let imageBase64 = '';
    if (req.file) {
      // Convert image buffer to base64
      imageBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    const productData = {
      name,
      price: parseFloat(price),
      brand,
      type,
      rating,
      desc: desc || '',
      image: imageBase64  // Changed from imageUrl to image
    };

    const newProduct = new Product(productData);
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

    const updateData = { ...req.body };
    
    // Handle image upload if present
    if (req.file) {
      // Convert image buffer to base64 for database storage
      updateData.image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
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