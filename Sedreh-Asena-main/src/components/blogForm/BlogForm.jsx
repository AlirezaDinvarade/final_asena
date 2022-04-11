import React from "react";

import "./blogForm.css";

const BlogForm = ({ action, style }) => {
  return (
    <>
      <form action={action} className="blogForm" style={style}>
        <input type="text" name="" id="" placeholder="نام مستعار" />
        <textarea
          type="text"
          name=""
          id=""
          rows="6"
          placeholder="متن دیدگاه"
          className="boxScroll"
        />
        <button>ثبت</button>
      </form>
    </>
  );
};

export default BlogForm;
