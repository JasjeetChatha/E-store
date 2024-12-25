import React, {Fragment} from "react";
import ProductCard from "../Product/productCard";
import "./Home-CSS/Home.scss";
import {products} from "../Data/Data";
function Home() {
  const addToCart = (productId, name, price, imageUrl) => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        productId,
        name,
        price,
        imageUrl,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response returns the updated cart
        const cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = ""; // Clear the existing cart

        data.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.innerHTML = `<p>${item.name} - $${item.price} x ${item.quantity}</p>`;
          cartDiv.appendChild(itemDiv);
        });
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };
  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
       <b> Welcome to E-store!</b> <i>Discover the latest and greatest in tech – from
        powerful PCs and sleek laptops to cutting-edge consoles and the hottest
        smartphones. Whether you're upgrading your gear or shopping for the best
        deals, we've got something for everyone. Dive into our world of
        innovation and find your perfect tech companion today!</i>
      </p>

      {/* PCs */}
      <div className="container">
        <div className="pc">
          <h2>PCs</h2>
          {products
            .filter((product) => product.type === "pc")
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart}
              />
            ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <div className="laptop">
          <h2>Laptops</h2>
          {products
            .filter((product) => product.type === "laptop")
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart}
              />
            ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <div className="mobile">
          <h2>Mobiles</h2>
          {products
            .filter((product) => product.type === "mobile")
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart}
              />
            ))}
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <div className="console">
          <h2>Consoles</h2>
          {products
            .filter((product) => product.type === "console")
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
