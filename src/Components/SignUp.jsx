import React from "react";
import "./signup.css";
function SignUp() {
  return (
    <div className="signupbox">
     <div className="container">
    <div className="registration-form">
      <h2>Registration</h2>
      <form action="#">
        <div className="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username"/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <label for="phone-number">Phone Number</label>
          <input type="tel" id="phone-number" placeholder="Enter your number"/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password"/>
        </div>
        <div className="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password"/>
        </div>
        <div className="form-group gender-group">
          <label>Gender</label>
          <label><input type="radio" name="gender" value="male"/> Male</label>
          <label><input type="radio" name="gender" value="female"/> Female</label>
          <label><input type="radio" name="gender" value="prefer-not-to-say"/> Prefer not to say</label>
        </div>
        <button type="submit" class="register-btn">Register</button>
      </form>
    </div>
  </div> 
    </div>
  );
}

export default SignUp;
