import React from "react";
import ProductCard from "../Product/productCard";

const CartPage = () => {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    const cartStore = window.sessionStorage.getItem("cart");
    if (cartStore) {
      setCartItems(JSON.parse(cartStore));
    }
  }, []);
  const removeFromCart = (_id) => {
    const cart = [...cartItems];
    const index = cart.findIndex((item) => item._id === _id);
    if (index !== -1) {
      cart.splice(index, 1); // Remove only the first occurrence
      setCartItems(cart); // Update state
    }
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <ProductCard {...item} />
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
