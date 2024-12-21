import React from "react";
import {useParams} from "react-router-dom";
import {products} from "../Data/Data";
import "./productDetail.scss";
function ProductDetail() {
  const {id} = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  if (!product) {
    return <h2>Product not found!</h2>; // Handle case when product is not found
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info-section">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-brand">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="product-rating">
          <strong>Rating:</strong> {product.rating} / 5
        </p>
        <p className="product-description">{product.desc}</p>

        <div className="product-price-section">
          <h2 className="product-price">${product.price}</h2>
        </div>

        <div className="product-actions">
          <button className="btn btn-add-to-cart">Add to Cart</button>
          <button className="btn btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
