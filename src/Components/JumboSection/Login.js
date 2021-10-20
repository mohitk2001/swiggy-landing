import React, { useState, useEffect } from "react";
import "./Jumbo.css";
import "./Login.css";
import $ from "jquery";
function Login() {
  const cut = () => {
    $(".loginCompo").slideToggle(500, () => {
      $("body").css({
        overflow: "unset",
      });
    });
  };
  return (
    <div className="loginCompo">
      <div className="loginBox">
        <i className="fas fa-times iconCross" onClick={cut}></i>
        <div className="loginHead">
          <div>
            <h1>Login</h1>
            <p>or create an account</p>
          </div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="img"
            className="loginImage"
          />
        </div>
        <div className="handleUnderBox">
          <input
            type="number"
            name=""
            id="logINBTN"
            placeholder="Phone number"
          />
          <button id="logButton">LOGIN</button>
        </div>
        <p>
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Login;
