import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "./Controller/product.controller.js";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.post("/products", createProduct);
app.put("/products/update/:id", updateProduct);
app.delete("/delete/:id", deleteProduct);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000 yo");
});
