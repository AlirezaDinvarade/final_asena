import React from "react";

import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col className="p-0" lg={6} md={5} sm={12}>
              <nav className="footer-nav">
                <section className="footer-nav-section">
                  <p>محصولات</p>
                  <ul>
                    <li>
                      {/* <a href="#link">نمای کلی محصولات</a> */}
                      {/* <a href="#link">API آلودگی هوا</a> */}
                      {/* <a href="#link">API آب و هوا</a> */}
                      {/* <a href="#link">تحلیل مسکن</a> */}
                      <a href="#link">پایش برخط کیفیت هوا</a>
                    </li>
                  </ul>
                </section>
                {/* <section className="footer-nav-section">
                  <p>راه حل ها</p>
                  <ul>
                    <li>
                      <a href="#link">آلودگی هوای محیط باز</a>
                      <a href="#link">هواشناسی کاربردی</a>
                      <a href="#link">آلودگی هوای محیط بسته</a>
                      <a href="#link">سلامت دیجیتال</a>
                    </li>
                  </ul>
                </section> */}
                {/* <section className="footer-nav-section">
                  <p>مجله</p>
                </section> */}
                <section className="footer-nav-section">
                  <a href="#about-us">درباره آسنا</a>
                </section>
              </nav>
            </Col>
            <Col xs={12} md={4} lg={3} sm={6}>
              <section className="footer-info">
                <div className="footer-address">
                  <p className="mb-0">
                    ایران تهران بلوار کشاورز خیابان قدس پلاک{" "}
                    <span className="num-font">45</span> واحد{" "}
                    <span className="num-font">8</span>{" "}
                  </p>
                  <p className="num-font">تلفن : 66354555</p>
                </div>
                <div className="footer-logo">
                  <div className="my-navbar-logo mr-2">
                    <span className="my-map-navbar-logo-desc">
                      <p>سامانه پایش</p>
                      <p>کاربردی کیفیت هوا</p>
                    </span>
                  </div>
                  <div className="my-navbar-logo">
                    <span
                      className="my-map-navbar-logo-img"
                      style={{ width: "60px", height: "40.2px" }}
                    ></span>
                  </div>
                </div>
                <div className="footer-social-icons mt-2">
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      padding: "0",
                      margin: ".7rem 0 .7rem .7rem",
                      cursor: "pointer",
                      backgroundColor: "#F2F7F9",
                      borderRadius: "100%",
                      display: "inline-block",
                    }}
                  >
                    <BsInstagram
                      color="#0876DD"
                      size="1.1rem"
                      style={{
                        margin: ".38rem .38rem 0 0",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      padding: "0",
                      margin: ".7rem",
                      cursor: "pointer",
                      backgroundColor: "#F2F7F9",
                      borderRadius: "100%",
                      display: "inline-block",
                    }}
                  >
                    <FaTelegramPlane
                      color="#0876DD"
                      size="1.1rem"
                      style={{
                        margin: ".38rem .38rem 0 0",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      padding: "0",
                      margin: ".7rem",
                      cursor: "pointer",
                      backgroundColor: "#F2F7F9",
                      borderRadius: "100%",
                      display: "inline-block",
                    }}
                  >
                    <BsTwitter
                      color="#0876DD"
                      size="1.1rem"
                      style={{
                        margin: ".38rem .38rem 0 0",
                      }}
                    />
                  </div>
                </div>
              </section>
            </Col>
            <Col md={3} lg={3} sm={6}>
              <div className="footer-map">
                <iframe
                  title="map"
                  width="180"
                  height="180"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=180&amp;height=180&amp;hl=en&amp;q=%D9%85%D8%B1%DA%A9%D8%B2%20%D9%86%D9%88%D8%A2%D9%88%D8%B1%DB%8C%20%D9%BE%DB%8C%D8%B4%D8%B1%D8%A7%D9%86%D8%A7+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/car-satnav-gps/">map</a>
                </iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
