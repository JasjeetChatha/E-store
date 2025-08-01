import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartProductCard from "../Product/CartProductCard"; // Adjust path as needed

const CartPage = () => {
  const { cart, getTotalItems, getTotalPrice } = useContext(CartContext);
  
  console.log("Cart contents:", cart);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary">
            <p><strong>Total Items: {getTotalItems()}</strong></p>
            <p><strong>Total Price: ${getTotalPrice()}</strong></p>
          </div>
          
          <div className="cart-items">
            {cart.map((item) => (
              <CartProductCard key={item.id} product={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;