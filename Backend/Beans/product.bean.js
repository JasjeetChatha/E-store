import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { type: String, required: true },
  desc: { type: String },
  imageUrl: { type: String, required: false },  // this stores path like '/uploads/filename.jpg'
  type: { type: String, required: true },
}, { timestamps: true });


export default mongoose.model("Product", productSchema);
