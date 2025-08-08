import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import {errorHandler} from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors({origin: process.env.FRONTEND_URL, credentials: true}));
app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
