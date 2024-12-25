import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import Product from "./Beans/product.bean.js";
// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({success: true, data: products});
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({success: false, message: "Server error"});
  }
});
app.post("/products", async (req, res) => {
  const product = req.body;
  if (
    !product.name ||
    !product.price ||
    !product.imageUrl ||
    !product.brand ||
    !product.type
  ) {
    return res
      .status(400)
      .json({success: false, message: "please provide all the fields"});
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res
      .status(201)
      .json({success: true, message: "Product Added Successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({success: true, message: "server error"});
  }
});
app.put("/products/update/:id", async (req, res) => {
  const {id} = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({success: false, message: "Product Not Found"});
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({success: true, data: updatedProduct});
  } catch (error) {
    return res
      .status(500)
      .json({success: false, message: "Product was not updated"});
  }
});
app.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product is deleted"});
  } catch (error) {
    res.status(500).json({success: false, message: "server error"});
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000 yo");
});
