import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  const [, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <Container fluid="sm">
        <Navbar
          className="my-bg-gray"
          collapseOnSelect
          expand="lg"
          bg={scrollTop > 100 ? "" : "transparent"}
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <div className="my-navbar-logo">
                <span className="my-navbar-logo-img"></span>
                <span className="my-navbar-logo-desc">
                  <p>سامانه پایش</p>
                  <p>کاربردی کیفیت هوا</p>
                </span>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Container className="d-lg-flex justify-content-lg-between">
                <Nav className="my-nav-items my-navbar-items my-navbar ">
                  <NavDropdown
                    className="my-navDropdown "
                    title="محصولات"
                    id="collasible-nav-dropdown"
                    style={{
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    {/* <NavDropdown.Item href="#action/3.1">
                      نمای کلی محصولات
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="#action/3.2">
                      API آلودگی هوا
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="#action/3.3">
                      API آب و هوا
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="#action/3.3">
                      تحلیل مسکن
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action/3.4">
                      پایش برخط کیفیت هوا
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    disabled
                    className="my-navDropdown"
                    title="راه حل ها"
                    id="collasible-nav-dropdown"
                    style={{
                      color: "white",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      آلودگی هوای محیط باز
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      هواشناسی کاربردی
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      آلودگی هوای محیط بسته
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      سلامت دیجیتال
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link>
                    <Link
                      to="/blog"
                      style={{
                        userSelect: "none",
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      مجله
                    </Link>
                  </Nav.Link>

                  <Nav.Link
                    href="#pricing"
                    disabled
                    style={{ userSelect: "none" }}
                  >
                    ارتباط با ما
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Link to="/map">
                    <Nav.Link
                      href="#deets"
                      className="my-btn my-btn-blue btn rounded-pill my-2 my-lg-0 mx-lg-2"
                      style={{ color: "#ffffff" }}
                    >
                      سامانه پایش برخط آلودگی هوا
                    </Nav.Link>
                  </Link>
                  <Nav.Link
                    disabled
                    eventKey="disabled"
                    href="#memes"
                    className="my-btn btn rounded-pill"
                    style={{ color: "#ffffff", backgroundColor: "#0876DD" }}
                  >
                    API رایگان
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
