import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
const Product= mongoose.model('Product',productSchema);
export default Product;