import {React} from "react";
import "./productCard.scss";
function ProductCard({product}) {
  return (
  
      <div
        className="product-container"
        style={{width: "18rem"}}
        onClick={() => (window.location.href = `/${product.type}/${product.typeid}`)}
      >
        <img className="product-image" src={product.typeimageUrl} alt={product.typename} />
        <div className="product-info">
          <h5 className="product-title">{product.typename}</h5>
          <p className="product-desc"><i>{product.typedesc}</i></p>
        </div>
        <ul className="product-details">
          <li className="product-detail">
            <b>Brand: </b>
            {product.typebrand}
          </li>
          <li className="product-detail">
            <b>Rating: </b>
            {product.typerating}
          </li>
          <li className="product-detail">
            <b>Price: </b>
            {product.typeprice}
          </li>
        </ul>
        <div className="product-actions">
          <button type="button" className="btn btn-add-to-cart" onClick={() => onAddToCart(id, name, price, imageUrl)}>
            Add To Cart
          </button>
          <button type="button" className="btn btn-buy-now">
            Buy Now
          </button>
        </div>
      </div>
    
  );
}

export default ProductCard;
