import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {connectDB} from "./config/db.js";
import cors from "cors";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "./Controller/product.controller.js";

// Load environment variables

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
const PORT = process.env.PORT;
app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.post("/products", createProduct);
app.put("/products/update/:id", updateProduct);
app.delete("/delete/:id", deleteProduct);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port " + PORT + " yo");
});
