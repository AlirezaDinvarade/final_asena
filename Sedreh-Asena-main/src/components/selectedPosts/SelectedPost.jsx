import React from "react";
import { Container } from "react-bootstrap";

import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import "./selectedPosts.css";

const SelectedPost = (props) => {
  return (

    <section>
      <div className="selectedPost-card">
        <img src={props.img} alt="" />
    <Container>

        <h3 className="mb-4">{props.title}</h3>
        <p className="mb-4">{props.summery}</p>
        <div className="selectedPost-cta">
          <a href="#more" className="selectedPosts-link">
            ادامه مطلب
          </a>
          <div className="selectedPost-info">
            <span className="selectedPosts-date num-font">
              <FaClock color="#575757" />
              {props.date}
            </span>
            <span className="selectedPosts-comments num-font">
              <FaRegComment color="#0876DD" />
              {props.comments}
            </span>
            <span className="selectedPosts-likes num-font">
              <FaRegHeart color="#EB392F" />
              {props.likes}
            </span>
          </div>
        </div>
    </Container>

      </div>
    </section>

  );
};

export default SelectedPost;
