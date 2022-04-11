import React from "react";
import NavBarBlog from "../navbar/NavBarBlog";
import Footer from "./../footer/Footer";

const BlogLayout = ({ children }) => {
  return (
    <>
      <NavBarBlog />
      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
