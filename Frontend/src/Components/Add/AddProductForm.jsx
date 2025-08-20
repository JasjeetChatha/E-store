import React,{ Fragment } from "react";
import "./AddForm.scss";
function AddProducts(){
    return(
    <Fragment>
<div class="product-form">
    <h2 class="product-form__title">Add New Product</h2>
    <form id="addProductForm" class="product-form__form" method="POST" action="https://e-store-backend.duckdns.org/products" enctype="multipart/form-data">
      
      {/* <!-- Product Name --> */}
      <div class="product-form__field">
        <label for="name" class="product-form__label">Product Name</label>
        <input type="text" id="name" name="name" required class="product-form__input" placeholder="Enter product name"/>
      </div>
      
      {/* <!-- Price --> */}
      <div class="product-form__field">
        <label for="price" class="product-form__label">Price</label>
        <input type="number" id="price" name="price" required class="product-form__input" placeholder="Enter price"/>
      </div>

      {/* <!-- Brand --> */}
      <div class="product-form__field">
        <label for="brand" class="product-form__label">Brand</label>
        <input type="text" id="brand" name="brand" required class="product-form__input" placeholder="Enter brand"/>
      </div>

      {/* <!-- Rating --> */}
      <div class="product-form__field">
        <label for="rating" class="product-form__label">Rating</label>
        <input type="text" id="rating" name="rating" required class="product-form__input" placeholder="e.g. 4.5"/>
      </div>

      {/* <!-- Description --> */}
      <div class="product-form__field">
        <label for="desc" class="product-form__label">Description</label>
        <textarea id="desc" name="desc" class="product-form__textarea" rows="3" placeholder="Enter product description"></textarea>
      </div>

      {/* <!-- Product Type --> */}
      <div class="product-form__field">
        <label for="type" class="product-form__label">Type</label>
        <input type="text" id="type" name="type" required class="product-form__input" placeholder="e.g. laptop, mobile, console"/>
      </div>

      {/* <!-- Image Upload --> */}
      <div class="product-form__field">
        <label for="image" class="product-form__label">Product Image</label>
        <input type="file" id="image" name="image" accept="image/*" class="product-form__input--file"/>
      </div>

      {/* <!-- Submit Button --> */}
      <button type="submit" class="product-form__submit">Add Product</button>
    </form>
  </div>
  </Fragment>
   )
};
export default AddProducts;