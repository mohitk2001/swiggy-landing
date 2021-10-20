import React from "react";
import "./Top.css";
function Top({ data }) {
  return (
    <div className="top">
      {data.map((value, index) => {
        return index === 0 ? (
          <a
          key={index}
            href="#"
            style={{
              color: "#808080",
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "uppercase",
              textDecoration:"none",
              marginBottom:"15px"
            }}
          >
            {value}
          </a>
        ) : (
          <a key={index} href="#">{value}</a>
        );
      })}
    
    </div>
  );
}

export default Top;
