import React from "react";

import avatar1 from "./../../assets/images/avatar1.jpg";
import avatar2 from "./../../assets/images/avatar2.jpg";
import avatar3 from "./../../assets/images/avatar3.jpg";

import "./usersOpn.css";
import { Container } from "react-bootstrap";

const UsersOpn = () => {
  return (
    <>
      <Container>
        <section className="usersOpn-container">
          <h2 className="usersOpn-title">نظرات کاربران</h2>
          <div className="usersOpn-cards">
            <div className="usersOpn-card">
              <img src={avatar1} alt="" />
              <div className="usersOpn-card-quationMark"></div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است، چاپگرها
              </p>
              <div className="usersOpn-info">
                <p className="usersOpn-info-date num-font">اردیبهشت 1400</p>
                <p className="usersOpn-info-author"> علیرضا سلیمان زاده</p>
              </div>
            </div>
            <div className="usersOpn-card">
              <img src={avatar2} alt="" />
              <div className="usersOpn-card-quationMark"></div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است، چاپگرها
              </p>
              <div className="usersOpn-info">
                <p className="usersOpn-info-date num-font">اردیبهشت 1400</p>
                <p className="usersOpn-info-author">علیرضا حسینی</p>
              </div>
            </div>
            <div className="usersOpn-card">
              <img src={avatar3} alt="" />
              <div className="usersOpn-card-quationMark"></div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است، چاپگرها
              </p>
              <div className="usersOpn-info">
                <p className="usersOpn-info-date num-font">اردیبهشت 1400</p>
                <p className="usersOpn-info-author">علیرضا حسینی</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default UsersOpn;
