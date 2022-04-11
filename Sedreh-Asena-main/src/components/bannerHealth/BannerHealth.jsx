import React from "react";

import { Container } from "react-bootstrap";

import "./banner.css";

const BannerHealth = () => {
  return (
    <>
      <div className="banner">
        <Container>
          <section className="banner-content">
            <p className="banner-title">آلودگی هوا</p>
            <p className="banner-desc num-font">
              {" "}
              سبب مرگ زودرس سالانه <span>41 هزار</span> نفر در کشور است
            </p>
            <p className="banner-src">مرکز آمار ایران</p>
          </section>
        </Container>
      </div>
    </>
  );
};

export default BannerHealth;
