import { Fragment } from "react";
import React from "react";
import "..Product/productCard.scss";
function HomeCard({id,name,price,brand,rating,desc,imageUrl}) {
  return (
<Fragment>

<div 
        className="product-container card" 
        style={{ width: '18rem' }} 
        onClick={() => window.location.href = `/detail/${id}`}
      >
        <img 
          className="product-image card-img-top" 
          src={imageUrl} 
          alt={name} 
        />
        <div className="product-info card-body">
          <h5 className="product-title">{name}</h5>
          <p className="desc">{desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item brand"><b>Brand: </b>{brand}</li>
          <li className="list-group-item rating"><b>Rating: </b>{rating}</li>
          <li className="list-group-item price"><b>Price: </b>{price}</li>
        </ul>
        <div className="product-actions card-body">
          <button type="button" className="btn btn-secondary">Add To Cart</button>
          <button type="button" className="btn btn-light">Buy Now</button>
        </div>
      </div>
</Fragment>
);
}

export default HomeCard;