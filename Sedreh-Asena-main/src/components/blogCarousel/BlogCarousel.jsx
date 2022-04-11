import React from "react";
import Carousel from "react-elastic-carousel";

import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import "./blogCarousel.css";
const BlogCarousel = ({posts}) => {
  return (
    <>
      <Carousel
        itemsToShow={1}
        itemPadding={[20, 0]}
        verticalMode={true}
        enableAutoPlay
        autoPlaySpeed={3500}
        isRTL={true}
        className="blogCarousel"
      >
        {posts.map((post,index)=> <section key={index} className="blogCarousel-card">
          <div className="blogCarousel-img-container">
            <img className="" src={post.coverImg} alt="" />
          </div>

          <div className="blogCarousel-content">
            <h3>{post.title}</h3>
            <p>
              {post.content}
            </p>
            <div className="blogCarousel-info">
              <a href="#a">ادامه مطلب</a>
              <div>
                <span className="selectedPosts-date num-font">
                  <FaClock color="#575757" />
                {post.date}
                </span>
                <span className="selectedPosts-comments num-font">
                  <FaRegComment color="#0876DD" />{post.commentsNum}
                </span>
                <span className="selectedPosts-likes num-font">
                  <FaRegHeart color="#EB392F" />
                  {post.likes}
                </span>
              </div>
            </div>
          </div>
        </section>)}
        

      </Carousel>
    </>
  );
};

export default BlogCarousel;
