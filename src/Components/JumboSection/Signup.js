import React from "react";
import "./SignUp.css";
import $ from "jquery";
function Signup() {
  const cutSign = () => {
    $(".signUpcomp").slideToggle(500, () => {
      $("body").css({
        overflow: "unset",
      });
    });
  };
  return (
    <div className="signUpcomp">
      <div className="SignBox">
        <i
          className="fas fa-times"
          style={{ fontSize: "30px" }}
          onClick={cutSign}
        ></i>
        <div className="SignHead">
          <div>
            <h1 style={{ fontWeight: "100" }}>Sign Up</h1>
            <p>or log in to your account</p>
          </div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="pc"
            className="SignImage"
          />
        </div>
        <div className="inputSignBox">
          <input type="number" placeholder="Your number" />
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <a href="#" className="refLink">
          Have a referral code ?
        </a>
        <button className="contButton">CONTINUE</button>
      </div>
    </div>
  );
}

export default Signup;
