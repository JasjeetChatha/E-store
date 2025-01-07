import React from "react";
function ProductCard({
  _id,
  name,
  type,
  price,
  brand,
  rating,
  desc,
  imageUrl,
  onAddToCart,
}) {
  return (
    <div
      className="product-container"
      style={{width: "18rem"}}
      onClick={() => (window.location.href = `/${type}/${_id}`)}
    >
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-info">
        <h5 className="product-title">{name}</h5>
        <p className="product-desc">
          <i>{desc}</i>
        </p>
      </div>
      <ul className="product-details">
        <li className="product-detail">
          <b>Brand: </b>
          {brand}
        </li>
        <li className="product-detail">
          <b>Rating: </b>
          {rating}
        </li>
        <li className="product-detail">
          <b>Price: </b>
          {price}
        </li>
      </ul>
      <div className="product-actions">
        <button
          type="button"
          className="btn btn-add-to-cart"
          onClick={() => onAddToCart(_id, name, price, imageUrl)}
        >
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
