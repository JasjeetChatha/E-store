import React, { Fragment, useContext } from "react";
import ProductCard from "../Product/productCard";
import "./Home-CSS/Home.scss";
import products from "../../Data/Products.json";
function Home() {

    
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
        <h2>PCs</h2>
        <div className="pc">
          
          {products.filter((product)=>product.type==="pc").map((product)=>(
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <h2>Laptops</h2>
        <div className="laptop">
          
          {products.filter((product)=>product.type==="laptop").map((product)=>(
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <h2>Mobiles</h2>
        <div className="mobile">
          
          {products.filter((product)=> product.type==="mobile").map((product)=>
          <ProductCard key={product.id} product={product}></ProductCard>)}
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <h2>Consoles</h2>
        <div className="console">
          
          {products.filter((product)=>product.type==="console").map
          ((product)=><ProductCard 
          key={product.id} 
          product={product} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
