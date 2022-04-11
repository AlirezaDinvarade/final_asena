import React from "react";
import Gallery from "react-photo-gallery";

import "./blogPostSec.css";

const BlogPostSec = ({ title, parag, imgsArray, style }) => {
  const array = [];
  if (imgsArray) {
    for (const element of imgsArray) {
      const obj = {
        src: element,
        width: 630,
        height: 330,
      };
      array.push(obj);
    }
  }

  return (
    <>
      <section className="blogPostSec" style={style}>
        <h2>{title}</h2>

        {array.length > 0 ? <Gallery photos={array} /> : null}
        <p>{parag}</p>
      </section>
    </>
  );
};

export default BlogPostSec;
