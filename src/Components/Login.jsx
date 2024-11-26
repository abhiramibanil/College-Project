import React from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="lg-Box">
        <div className="log-content">
          <div className="lg-head">
            <p>WELCOME BACK</p>
            <p>welcome back! Please Enter your details</p>
          </div>

          <div>
            <form action="">
              <div className="i-box">
                <label htmlFor="email" className="t">
                  Email
                </label>
                <input type="text" id="email" placeholder="Enter Your email" />
              </div>

              <div className="i-box">
                <label htmlFor="password" className="t">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </form>

            <div className="fp">
              <div className="remme">
                <input type="checkbox" />
                <p>Remember me </p>
              </div>

              <p>Forgot Password</p>
            </div>

            <button className="signBtn">Sign in</button>
            <button className="google">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt=""
              />
              Sign in with Google
            </button>
            <p className="spf">
              Don't have an account? <span>Sign up for free!</span>
            </p>
          </div>
        </div>

        {/*-----------------------------------The Image Section----------------------------------------- */}
        <div className="lgImg">
          <img src="https://img.freepik.com/premium-photo/student-black-man-books-study-home-desk-thinking-reading-studying-college-person-learning-focused-information-page-education-knowledge-working-law-research_590464-177778.jpg"></img>
        </div>
      </div>
    </>
  );
}
