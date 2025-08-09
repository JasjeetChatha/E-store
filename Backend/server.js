// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);
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

const upload = multer({ storage });

// Product schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: String, required: true },
    desc: { type: String },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);


// POST route for creating product with image
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.price ||
      !req.body.brand ||
      !req.body.rating ||
      !req.body.type ||
      !req.file
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all required fields" });
    }

    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      brand: req.body.brand,
      rating: req.body.rating,
      desc: req.body.desc || "",
      type: req.body.type,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await newProduct.save();

    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
