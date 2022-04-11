import React from "react";
import { FaSquare } from "react-icons/fa";
import "./recLine.css";
const RecLine = ({ title, linkTitle, link, size, titleColor, style }) => {
  return (
    <section className="recLine" style={style}>
      <div className="recLine-content">
        <div
          className={
            size === "lg" ? "recLine-content-title-lg" : "recLine-content-title"
          }
        >
          <FaSquare
            color="#0876dd"
            size={size === "lg" ? "1.5rem" : "1rem"}
            className="recLine-content-rec"
          />
          <h2
            style={{
              color: `${titleColor}`,
              paddingRight: `${size === "lg" ? "24px" : "15px"}`,
              fontSize: `${size === "lg" ? "1.8rem" : "1rem"}`,
            }}
          >
            {title}
          </h2>
        </div>
        <a
          href={link}
          style={{
            fontSize: `${size === "lg" ? "1rem" : ".7rem"}`,
          }}
        >
          {linkTitle}
        </a>
      </div>
      <span
        className={size === "lg" ? "recLine-line-lg" : "recLine-line"}
      ></span>
    </section>
  );
};

export default RecLine;
