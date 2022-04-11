import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import "./blogInfo.css";

const BlogInfo = ({ author, date, tags, style }) => {
  const [liked, like] = useState(false);
  const likeBlogHandler = () => {
    like(true);
  };
  return (
    <>
      <section className="blogInfo">
        <div>
          <div>
            <span className="typo1">نویسنده: </span>
            <span className="typo1">{author}</span>
          </div>
          <p className="typo3 num-font">{date}</p>
        </div>
        <div>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <span className="typo1 ms-3">برچسب ها:</span>
            {tags.map((tag, index) => (
              <span key={index} className="typo2">{`#${tag}`}</span>
            ))}
          </div>
          <div>
            <span className="typo1">می پسندم</span>
            {liked ? (
              <FaHeart
                color="#EB392F"
                size="2rem"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FaRegHeart
                color="#EB392F"
                size="2rem"
                style={{ cursor: "pointer" }}
                onClick={likeBlogHandler}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInfo;
