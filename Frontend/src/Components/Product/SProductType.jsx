import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./productCard";
import "./SProductType.scss";
function SProductType() {
  const { type } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const API_URL = 'https://e-store-backend.duckdns.org';
  useEffect(() => {
    async function fetchProductsByType() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        // Filter products by type on the client side (or you can create backend filter API later)
        const filtered = (data.data || []).filter(
          (product) => product.type === type
        );
        setFilteredProducts(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProductsByType();
  }, [type]);

  if (loading) return <p>Loading {type} products...</p>;
  if (error) return <p>Error loading products: {error}</p>;
  if (filteredProducts.length === 0)
    return <p>No products found for {type}</p>;

  return (
    <div className="container product-grid">
  <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
  <div className="grid">
    {filteredProducts.map((product) => (
      <ProductCard key={product._id || product.id} product={product} />
    ))}
  </div>
</div>

  );
}

export default SProductType;
