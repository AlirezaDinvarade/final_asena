import React from "react";
import { Container } from "react-bootstrap";

import apiMapPic from "./../../assets/images/api-map-pic-525-263.png";

import "./apiBanner.css";

const ApiBanner = () => {
  return (
    <>
      <section className="apiBanner-container-1">
        <Container>
          <div className="apiBanner-container-2">
            <img className="apiBanner-pic" src={apiMapPic} alt="" />
            <div className="apiBanner-description">
              <h3> API رایگان </h3>
              <ul>
                <li>پوشش سراسری کشور ایران</li>
                <li>API آلاینده های موجود در هر منقطه شهر</li>
                <li>آب و هوا منطقه ای</li>
                <li>رایگان!</li>
              </ul>
              <div className="apiBanner-btns">
                <button className="apiBanner-btn-1">صفحه مستندات</button>
                <button className="apiBanner-btn-2">اطلاعات بیشتر</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ApiBanner;
