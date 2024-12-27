import React from "react";
// import "./signup.css";

function SignUp() {
  return ( 
    <>
      <div className="d-flex justify-content-center">
        <h1 className="text-success mt-5 fw-bold mb-5">Super Login</h1>
      </div>

      <div className="container d-flex justify-content-center align-items-center" >
        <div className="shadow rounded p-4 d-flex flex-column align-items-center w-50">
          <input type="text" className="form-control mt-3 w-75" placeholder="Username" />
          <input type="password" className="form-control mt-3 w-75" placeholder="Password" />
          <button className="btn btn-success mt-3 w-25">Login</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
