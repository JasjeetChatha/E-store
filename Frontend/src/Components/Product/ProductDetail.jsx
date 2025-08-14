import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./productDetail.scss";

function ProductDetail() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://e-store-backend.duckdns.org";

  useEffect(() => {
    if (!id) return; // prevent fetching when id is undefined

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");

        const json = await response.json();
        // Backend returns { success: true, data: {...} }
        const productData = json.data;
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, API_URL]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img
          src={product.image || "/placeholder.png"} // fallback image
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
          <button
            className="btn btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="btn btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
