import React, {Fragment} from "react";
import ProductCard from "../Product/productCard";
import "./Home-CSS/Home.scss";
import {products} from "../../Data/Products.json";
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
        <div className="pc">
          <h2>PCs</h2>
          {products.filter((product)=>product.type==="pc").map((product)=>(
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <div className="laptop">
          <h2>Laptops</h2>
          {products.filter((product)=>product.type==="laptops").map((product)=>(
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <div className="mobile">
          <h2>Mobiles</h2>
          {products.filter((product)=> product.type==="mobile").map((product)=>
          <ProductCard key={product.id} product={product}></ProductCard>)}
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <div className="console">
          <h2>Consoles</h2>
          {products.filter((product)=>product.type==="console").map
          ((product)=><ProductCard key={product.id} product={product} ></ProductCard>)}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
