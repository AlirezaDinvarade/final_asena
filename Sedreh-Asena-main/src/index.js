import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/map/Map.js";
import App from "./App";
import Blog from "./containers/blogPage/Blog";
import BlogPost from "./containers/blogPage/BlogPost";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="map" element={<Map />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogPost" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
