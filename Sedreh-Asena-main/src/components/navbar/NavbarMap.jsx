import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar, // eslint-disable-next-line
  Button, // eslint-disable-next-line
  FormControl, // eslint-disable-next-line
  Form, // eslint-disable-next-line
  NavDropdown, // eslint-disable-next-line
  Offcanvas,
} from "react-bootstrap";

import { BiMenuAltLeft } from "react-icons/bi";

import "./navbar.css";

import { Link } from "react-router-dom";

const NavbarMap = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Navbar
        expand={false}
        style={{ padding: "0", backgroundColor: "#0876dd" }}
      >
        <Container fluid style={{}}>
          <Navbar.Brand href="#home">
            <Link to="/">
              <div className="my-navbar-logo">
                <span className="my-map-navbar-logo-desc">
                  <p>سامانه پایش</p>
                  <p>کاربردی کیفیت هوا</p>
                </span>
              </div>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <div className="my-navbar-logo ">
                <span className="my-map-navbar-logo-img"></span>
              </div>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Item>
              <BiMenuAltLeft
                color="#fff"
                size="2rem"
                style={{ cursor: "pointer", display: "none" }}
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {menu ? (
        <div
          style={{
            position: "absolute",
            left: "0",
            padding: "1rem 2rem",
            backgroundColor: "#0876dd",
            zIndex: 200,
          }}
        >
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default NavbarMap;
