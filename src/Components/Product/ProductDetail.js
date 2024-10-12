import React from "react";
function ProductDetail({id,name,price,brand,rating,desc,imageUrl}) {
  
    return (
        <div class="product-container">
        <img src="product-image.jpg" alt="Product Image" class="product-image" />

        <div class="product-info">
            <h1>{name}</h1>
            <p class="price">${price}</p>
            <p class="brand"><strong>Brand:</strong> {brand}</p>
            <p class="rating"><strong>Rating:</strong> {rating}</p>
            <p class="description">{desc }</p>
        </div>
    </div>
    );
}
export default ProductDetail;