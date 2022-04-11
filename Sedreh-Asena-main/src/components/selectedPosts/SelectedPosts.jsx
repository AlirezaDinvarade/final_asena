import React from "react";

import DemoCarousel from "./DemoCarousel";

import "./selectedPosts.css";
import { Container } from "react-bootstrap";

const SelectedPosts = () => {
  const posts = [
    {
      title: "آلودگی هوا معضل جهانی",
      summery:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      comments: 5,
      likes: 21,
    },
    {
      title: "2 آلودگی هوا معضل جهانی",
      summery:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      comments: 7,
      likes: 11,
    },
    {
      title: "3 آلودگی هوا معضل جهانی",
      summery:
        "متن خلاصه مقاله شماره دو متن خلاصه مقاله شماره دومتن خلاصه مقاله شماره دومتن خلاصه مقاله شماره دو",
      comments: 9,
      likes: 31,
    },
  ];

  return (
    <>
      <section className="selectedPosts-container">
        <div className="selectedPosts-title">
          <h2>منتخب مجله</h2>
        </div>
      </section>
      <Container className="center">
        <DemoCarousel posts={posts} />
      </Container>
    </>
  );
};

export default SelectedPosts;
