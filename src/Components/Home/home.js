import React, { Fragment } from "react";
import ProductCard from "../Product/productCard";
import './Home-CSS/Home.scss';
import { products } from "../Data/Data";
function Home() {
  
  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptate, quas, tempora quia quae quod dolorum doloremque
        voluptatem quibusdam laboriosam. Quod, voluptatem. Quisquam voluptates,
        voluptate, quas, tempora quia quae quod dolorum doloremque voluptatem
        quibusdam laboriosam. Quod, voluptatem.
      </p>
      {/* PCs */}
      <div className="container">
        <div className="pc">
          <h2>PCs</h2>
          {products.filter(product => product.type === "pc").map(product => (
              <ProductCard
                type={product.type}
                id={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                rating={product.rating}
                desc={product.desc}
                imageUrl={product.imageUrl}
              />))}
            
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <div className="laptop">
          <h2>Laptops</h2>
          {products.filter(product=> product.type ==="laptop").map(product=>(
              <ProductCard
                type={product.type}
                id={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                rating={product.rating}
                desc={product.desc}
                imageUrl={product.imageUrl}
              />))}
            
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <div className="mobile">
          {products.filter(product=> product.type === "mobile").map(product=>(
              <ProductCard
                type={product.type}
                id={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                rating={product.rating}
                desc={product.desc}
                imageUrl={product.imageUrl}
              />))}
           
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <div className="console">
          <h2>Consoles</h2>
          {products.filter(product=> product.type ==="console").map(product=>(
              <ProductCard
                type={product.type}
                id={product.id}
                name={product.name}
                price={product.price}
                brand={product.brand}
                rating={product.rating}
                desc={product.desc}
                imageUrl={product.imageUrl}
              />))}
           
        </div>
      </div>
    </Fragment>
  );
};

export default Home;