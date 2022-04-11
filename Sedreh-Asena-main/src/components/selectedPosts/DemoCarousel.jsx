import React from "react";

import Carousel from "react-elastic-carousel";

import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import "./selectedPosts.css";

const DemoCarousel = ({ posts }) => {
  return (
    <>
      <Carousel isRTL={true} className="carousel__slider-sm mt-1">
        {posts.map((val, index) => {
          return (
            <section className="carousel__slide-sm" key={index}>
              <div className="selectedPosts-card">
                <h3>{val.title}</h3>
                <p>{val.summery}</p>
                <div className="selectedPosts-cta">
                  <a href="#more" className="selectedPosts-link">
                    ادامه مطلب
                  </a>
                  <div className="selectedPost-info">
                    <span className="selectedPosts-date num-font">
                      <FaClock color="#575757" />
                      23 شهریور
                    </span>
                    <span className="selectedPosts-comments num-font">
                      <FaRegComment color="#0876DD" />
                      {val.comments}
                    </span>
                    <span className="selectedPosts-likes num-font">
                      <FaRegHeart color="#EB392F" />
                      {val.likes}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </Carousel>
      <section className="carousel__dotGroup-sm " />
    </>
  );
};

export default DemoCarousel;
