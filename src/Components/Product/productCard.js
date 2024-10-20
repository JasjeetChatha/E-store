import { Fragment } from "react";
import React from "react";
import "./productCard.scss";
function ProductCard({id,name,price,brand,rating,desc,imageUrl}) {
  return (
<Fragment>

<div
      className="product-container" 
      style={{ width: '18rem' }} 
      onClick={() => window.location.href = `/detail/${id}`}>

      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-info">
        <h5 className="product-title">{name}</h5>
        <p className="product-desc">{desc}</p>
      </div>
      <ul className="product-details">
        <li className="product-detail"><b>Brand: </b>{brand}</li>
        <li className="product-detail"><b>Rating: </b>{rating}</li>
        <li className="product-detail"><b>Price: </b>{price}</li>
      </ul>
      <div className="product-actions">
        <button type="button" className="btn btn-add-to-cart">Add To Cart</button>
        <button type="button" className="btn btn-buy-now">Buy Now</button>
      </div>
    </div>
</Fragment>
);
}

export default ProductCard;