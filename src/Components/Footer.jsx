import React from "react";
import './Footer.css'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-dir">
          <ul className="fl">
            <li className="lih">About us</li>
            <li>Future</li>
            <li>Academic Programs</li>
            <li>Research</li>
          </ul>
          <ul className="fl">
            <li className="lih">Library</li>
            <li>Recreation</li>
            <li>Varsity Sports</li>
            <li>Alumini</li>
          </ul>

          <ul className="fl">
            <li className="lih">Given Up</li>
            <li>Disclaimer</li>
            <li>Given Us</li>
            <li>Contact</li>
          </ul>

          <ul className="social">
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>

        <div className="foo-div">
          <p>BV University</p>
          <p>CopyRight &copy; Bv University Disclaimer </p>
        </div>
      </div>
    </>
  );
}

export default Footer;