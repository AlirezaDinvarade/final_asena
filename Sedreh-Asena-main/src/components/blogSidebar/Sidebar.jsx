import React from "react";
import { FaSquare } from "react-icons/fa";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <section className="blogSidebar">
        <div className="sidebarNav">
          <div className="sidebarNav-content">
            <div className="sidebarNav-content-title">
              <FaSquare
                color="#0876dd"
                size="1rem"
                className="sidebarNav-content-rec"
              />
              <h2
                style={{
                  paddingRight: "15px",
                  fontSize: "1rem",
                }}
              >
                آخرین مقالات
              </h2>
            </div>
            <div className="sidebarNav-content-items">
              <a href="#a" className="sidebarNav-link num-font">
                تاثیر آلودگی هوا بر سلامت روان
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                عوامل موثر در افزایش آلاینده ها
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                ۵ توصیه برای زنان باردار
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                پدیده وارونگی هوا چیست؟
              </a>
            </div>
          </div>
          <div className="sidebarNav-content">
            <div className="sidebarNav-content-title">
              <FaSquare
                color="#0876dd"
                size="1rem"
                className="sidebarNav-content-rec"
              />
              <h2
                style={{
                  paddingRight: "15px",
                  fontSize: "1rem",
                }}
              >
                پر بازدیدترین
              </h2>
            </div>
            <div className="sidebarNav-content-items">
              <a href="#a" className="sidebarNav-link num-font">
                ۵ توصیه برای زنان باردار
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                عوامل موثر در افزایش آلاینده ها
              </a>

              <a href="#a" className="sidebarNav-link num-font">
                پدیده وارونگی هوا چیست؟
              </a>
            </div>
          </div>
          <div className="sidebarNav-content">
            <div className="sidebarNav-content-title">
              <FaSquare
                color="#0876dd"
                size="1rem"
                className="sidebarNav-content-rec"
              />
              <h2
                style={{
                  paddingRight: "15px",
                  fontSize: "1rem",
                }}
              >
                برچسب ها
              </h2>
            </div>
            <div className="sidebarNav-content-items">
              <a href="#a" className="sidebarNav-link num-font">
                آلودگی هوا
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                سلامت روان
              </a>
              <a href="#a" className="sidebarNav-link num-font">
                فعالیت ورزشی
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
