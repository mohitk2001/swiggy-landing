import React from "react";
import "./FooterBottom.css";
function FooterBottom() {
  return (
    <div className="FooterBottom">
      <div className="firstB">
        <a href="#">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          alt="pc"
        />
        </a>
      </div>
      <div className="firstS">
        <h2>&copy;  2021 Swiggy</h2>
      </div>
      <div className="bottomLast">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-pinterest-p"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter-square"></i></a>
      </div>
    </div>
  );
}

export default FooterBottom;
