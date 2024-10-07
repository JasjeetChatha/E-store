import { Fragment } from "react";
import React from "react";

function HomeCard({name,price,brand,rating,desc,imageUrl}) {
  return (
<Fragment>

    <div class="card text-white bg-dark mb-3" style={{width:' 18rem'}}>
  <img class="card-img-top" className="imgurl" src={imageUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" className="title">{name}</h5>
    <p class="card-text" className="desc">{desc}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" className="brand">{brand}</li>
    <li class="list-group-item" className="rating">{rating}</li>
    <li class="list-group-item" className="price">{price}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link"><button type="button" class="btn btn-secondary">Add To Cart</button></a>
    <a href="#" class="card-link"><button type="button" class="btn btn-light">Buy Now</button></a>
  </div>
</div>
</Fragment>
);
}

export default HomeCard;