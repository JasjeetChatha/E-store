import React, { Fragment, useState, useEffect } from "react";
import ProductCard from "../Product/productCard";
import "./Home-CSS/Home.scss";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.data || []);
      setError(null); // clear previous errors if successful
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  fetchProducts();
}, []);


  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        <b>Welcome to E-store!</b>{" "}
        <i>
          Discover the latest and greatest in tech – from powerful PCs and sleek
          laptops to cutting-edge consoles and the hottest smartphones. Whether
          you're upgrading your gear or shopping for the best deals, we've got
          something for everyone. Dive into our world of innovation and find your
          perfect tech companion today!
        </i>
      </p>

      {/* PCs */}
      <div className="container">
        <h2>PCs</h2>
        <div className="pc">
          {products
            .filter((product) => product.type === "pc")
            .map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <h2>Laptops</h2>
        <div className="laptop">
          {products
            .filter((product) => product.type === "laptop")
            .map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <h2>Mobiles</h2>
        <div className="mobile">
          {products
            .filter((product) => product.type === "mobile")
            .map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <h2>Consoles</h2>
        <div className="console">
          {products
            .filter((product) => product.type === "console")
            .map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
