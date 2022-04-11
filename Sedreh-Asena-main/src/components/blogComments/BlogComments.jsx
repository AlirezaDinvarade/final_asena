import React from "react";

import "./blogComments.css";

const BlogComments = ({ comments, style }) => {
  return (
    <>
      <section className="blogComments boxScroll" style={style}>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <h6>{comment.title}</h6>
            <p>{comment.content}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default BlogComments;
