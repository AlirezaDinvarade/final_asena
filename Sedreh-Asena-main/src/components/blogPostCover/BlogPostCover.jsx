import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import "./blogPostCover.css";

const blogPostCover = ({
  imgUrl,
  imgAlt,
  imgWidth,
  author,
  likes,
  comments,
  date,
  style,
}) => {
  return (
    <div className="blogPostCover-container" style={style}>
      <img
        src={imgUrl}
        alt={imgAlt}
        style={{ width: `clamp(300px,${imgWidth},700px)` }}
      />
      <div
        className="blogPostCover-info"
        style={{ width: `clamp(300px,${imgWidth},700px)` }}
      >
        <p className="author mb-0">{author}</p>

        <div>
          <span className="date num-font px-2">
            <FaClock color="#575757" />
            {date}
          </span>
          <span className="comments num-font px-2">
            <FaRegComment color="#0876DD" />
            {comments}
          </span>
          <span className="likes num-font">
            <FaRegHeart color="#EB392F" />
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default blogPostCover;
