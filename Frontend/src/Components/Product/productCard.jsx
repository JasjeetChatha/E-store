import {React,useContext} from "react";
import "./productCard.scss";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
function ProductCard({product}) {
const {addToCart}=useContext(CartContext);
const navigate = useNavigate();
  return (
  
       <div
      className="product-container"
      style={{ width: "18rem" }}
      onClick={() => navigate(`/${product.type}/${product.id}`)}
    >
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-info">
          <h5 className="product-title">{product.name}</h5>
          <p className="product-desc"><i>{product.desc}</i></p>
        </div>
        <ul className="product-details">
          <li className="product-detail">
            <b>Brand: </b>
            {product.brand}
          </li>
          <li className="product-detail">
            <b>Rating: </b>
            {product.rating}
          </li>
          <li className="product-detail">
            <b>Price: </b>
            {product.price}
          </li>
        </ul>
        <div className="product-actions">
         <button
  type="button"
  className="btn btn-add-to-cart"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  }}
>
  Add To Cart
</button>

<button
  type="button"
  className="btn btn-buy-now"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    // your buy now logic here
  }}
>
  Buy Now
</button>


        </div>
      </div>
    
  );
}

export default ProductCard;
