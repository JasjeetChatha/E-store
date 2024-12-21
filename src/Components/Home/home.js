import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Product/productCard";
import "./Home-CSS/Home.scss";
import { products } from "../Data/Data";
function Home() { 

  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptate, quas, tempora quia quae quod dolorum doloremque
        voluptatem quibusdam laboriosam. Quod, voluptatem.
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
              />
            ))}
        </div>
      </div>
      function addToCart(name,price,imageUrl){

      }
    </Fragment>
  );
}

export default Home;
