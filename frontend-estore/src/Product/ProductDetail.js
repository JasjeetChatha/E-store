import React from "react";
import {useParams} from "react-router-dom";
function ProductDetail() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState(null);
  const {_id} = useParams();
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const {data} = await response.json();
        setProducts(data);
        setProduct(data.find((prod) => prod._id === _id));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);
  if (!product) {
    return <h2>Product not found!</h2>; // Handle case when product is not found
  }
  const addToCart = (product) => {
    const cartStore = window.sessionStorage.getItem("cart");
    if (cartStore) {
      const cart = JSON.parse(cartStore);
      cart.push(product);
      window.sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      window.sessionStorage.setItem("cart", JSON.stringify([product]));
    }
  };
  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info-section">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-brand">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="product-rating">
          <strong>Rating:</strong> {product.rating} / 5
        </p>
        <p className="product-description">{product.desc}</p>

        <div className="product-price-section">
          <h2 className="product-price">${product.price}</h2>
        </div>

        <div className="product-actions">
          <button
            className="btn btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="btn btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
