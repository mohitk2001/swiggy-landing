import React from "react";
import "./Handle.css";
function Handle() {
  return (
    <div className="handle">
      <div className="handle_left">
        <div className="handle_L_container">
          <h1>Restaurants in your pocket</h1>
          <p>
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </p>
          <div className="handle_store">
            <a href="/#">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                alt="google"
              />
            </a>
            <a href="/#">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                alt="apple"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="handle_right">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
          alt="imagess"
          className="upperImg"
        />
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
          alt="imagess"
          className="lowerImage"
        />
      </div>
    </div>
  );
}

export default Handle;
