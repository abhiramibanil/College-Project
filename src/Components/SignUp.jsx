import React, { useState } from "react";
import "./signup.css";

function SignUp() {
  return ( 
    <div class="container">
    <h2>Super User Login</h2>
    <form>
        <div class="input-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
        </div>

        <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
        </div>

        <div class="action-group">
            <div class="remember">
                <input type="checkbox" id="remember"/>
                <label for="remember">Remember Me</label>
            </div>
        </div>

        <button type="submit" class="btn-login">Login</button>
    </form>

   
</div>

  );
}

export default SignUp;
