// server.js or your main backend entry file
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({storage});

// Define product mongoose schema (simplified)
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  imageUrl: String, // This will store the image path like /uploads/12345.jpg
});

const Product = mongoose.model("Product", productSchema);

// POST route for creating product with image
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    // req.file contains image info, req.body has text fields
    if (!req.file)
      return res.status(400).json({error: "Image file is required"});

    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      type: req.body.type,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await newProduct.save();

    res.status(201).json({success: true, product: newProduct});
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({success: false, error: "Server error"});
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
