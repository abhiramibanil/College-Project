import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <p className="fp-1">Subscribe to our news letter</p>
        <p className="fp-2">
          Get expert advice for your journey to university delivered to your
          inbox each <br /> month. It's short, and worthwhile – we promise!
        </p>

        <div className="s-btn-box">
          <button className="sb-n">Subscribe Now</button>
        </div>

        <hr className="hrf" />

        <div className="socials">
          <i class="fa-brands fa-facebook fa-soc"></i>
          <i class="fa-brands fa-instagram fa-soc"></i>
          <i class="fa-brands fa-twitter fa-soc"></i>
          <i class="fa-brands fa-linkedin fa-soc"></i>
        </div>

        <ul className="fo-l">
          <li>About</li>
          <li>Contact us</li>
          <li>faq</li>
          <li>Terms and Condition</li>
          <li>Cookie Policy</li>
          <li>Privacy</li>
        </ul>

        <p className="copy-right">Copyright &#169; 2023 - Mrs. College Guide</p>
      </div>
    </>
  );
}

export default Footer;
