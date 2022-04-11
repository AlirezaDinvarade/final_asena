import React from "react";

import { Button, Container } from "react-bootstrap";

import "./adscards.css";

const AdsCards = () => {
  return (
    <Container>
      <div className="adsCard-container">
        <div className="adsCard">
          <p className="adsCard-title">
            تصفیه هوای داخل منزل
            <br />
            با دستگاه تصفیه هوا
          </p>
          <Button href="#memes" className="adsCard-btn btn rounded-pill">
            مطالعه بیشتر
          </Button>
        </div>
        <div className="adsCard">
          <p className="adsCard-title">
            پایش برخط آلودگی هوا
            <br />
            در هرنقطه شهر
          </p>
          <Button href="#memes" className="adsCard-btn btn rounded-pill">
            مطالعه بیشتر
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AdsCards;
