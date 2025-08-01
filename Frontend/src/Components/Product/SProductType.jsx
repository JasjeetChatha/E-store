import React from "react";
import {useParams} from "react-router-dom";
import products from "../../Data/Products.json"; // Assuming you have a products data file
import ProductCard from "./productCard"; // Assuming you have a ProductCard component

function SProductType() {
  const {type} = useParams();
  const filteredProducts = products.filter((prod) => prod.type === type);
  return (
    <div className="container">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <br />
      <br />
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
         product={product}
          
        />
      ))}
    </div>
  );
}
export default SProductType;
