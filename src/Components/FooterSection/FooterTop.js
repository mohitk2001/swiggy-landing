import React from "react";
import "./FooterTop.css";
import { topData } from "./FooterData";
import Top from "./Top";
function FooterTop() {
  return (
    <div className="footerTop">
      <Top data={topData.company} />
      <Top data={topData.contact} />
      <Top data={topData.legal} />
      <div className="footerTopStore">
        <a href="#">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="google"
          />
        </a>
        <a href="#">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="apple"
          />
        </a>
      </div>
    </div>
  );
}

export default FooterTop;
