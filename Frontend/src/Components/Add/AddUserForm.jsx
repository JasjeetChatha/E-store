import React,{Fragment} from"react";
import "./AddForm.scss";
function AddUser(){
return(<Fragment>
     <div class="user-form">
    <h2 class="user-form__title">Add New User</h2>
    <form class="user-form__form" id="addUserForm" method="POST" action="https://e-store-backend.duckdns.org/users">
      
      {/* <!-- Name --> */}
      <div class="user-form__field">
        <label for="name" class="user-form__label">Name</label>
        <input type="text" id="name" name="name" required class="user-form__input" placeholder="Enter full name"/>
      </div>

      {/* <!-- Email --> */}
      <div class="user-form__field">
        <label for="email" class="user-form__label">Email</label>
        <input type="email" id="email" name="email" required class="user-form__input" placeholder="example@email.com"/>
      </div>

      {/* <!-- Password --> */}
      <div class="user-form__field">
        <label for="password" class="user-form__label">Password</label>
        <input type="password" id="password" name="password" required class="user-form__input" placeholder="Enter password"/>
      </div>

      {/* <!-- Age --> */}
      <div class="user-form__field">
        <label for="age" class="user-form__label">Age</label>
        <input type="number" id="age" name="age" required class="user-form__input" placeholder="Enter age"/>
      </div>

      {/* <!-- Address --> */}
      <div class="user-form__field">
        <label for="address" class="user-form__label">Address</label>
        <textarea id="address" name="address" required class="user-form__textarea" placeholder="Enter address" rows="3"></textarea>
      </div>

      {/* <!-- Submit Button --> */}
      <button type="submit" class="user-form__submit">Add User</button>
    </form>
  </div>
  </Fragment>
)
};
export default AddUser;
