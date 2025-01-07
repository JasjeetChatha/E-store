import React from "react";
import {useParams} from "react-router-dom";
import ProductCard from "./productCard"; // Assuming you have a ProductCard component

function SProductType() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const {type} = useParams();
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const {data} = await response.json();
        setProducts(data);
        setFilteredProducts(data.filter((prod) => prod.type === type));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);
  return (
    <div className="container">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
      <br />
      <br />
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
        />
      ))}
    </div>
  );
}
export default SProductType;
