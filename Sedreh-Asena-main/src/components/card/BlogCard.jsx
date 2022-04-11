import React from "react";

import { FaClock } from "react-icons/fa";

import "./blogCard.css";

const BlogCard = ({ link, date, style,img,title,content }) => {
  return (
    <div className="blog-card" style={style}>
      <img className="img-fluid" src={img} alt="" />
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>
       {content}
        </p>
        <section className="blog-card-info">
          <a href={link}>ادامه مطلب</a>
          <div className="num-font">
            <FaClock color="#575757" style={{ marginLeft: "3px" }} />
            {date}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogCard;
