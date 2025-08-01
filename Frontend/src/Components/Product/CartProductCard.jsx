import React, { useContext } from "react";
import "./CartProductCard.scss"; // You can create this or reuse productCard.scss
import { CartContext } from "../../Context/CartContext";

function CartProductCard({ product }) {
  const { addToCart, removeFromCart, getItemQuantity } = useContext(CartContext);
  const quantity = getItemQuantity(product.id);

  return (
    <div className="cart-product-container" style={{ width: "18rem" }}>
      <img 
        className="product-image" 
        src={product.imageUrl} 
        alt={product.name} 
      />
      <div className="product-info">
        <h5 className="product-title">{product.name}</h5>
        <p className="product-desc">
          <i>{product.desc}</i>
        </p>
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
          ${product.price}
        </li>
        <li className="product-detail">
          <b>Subtotal: </b>
          ${(parseFloat(product.price) * quantity).toFixed(2)}
        </li>
      </ul>
      <div className="quantity-controls">
        <button
          type="button"
          className="btn btn-quantity btn-remove"
          onClick={() => removeFromCart(product.id)}
        >
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button
          type="button"
          className="btn btn-quantity btn-add"
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartProductCard;