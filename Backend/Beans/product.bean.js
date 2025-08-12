import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { type: String, required: true },
  desc: { type: String },
  image: { type: String, required: false }, // Base64 encoded image
  type: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);