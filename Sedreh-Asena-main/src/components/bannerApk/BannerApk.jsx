import React from "react";
import { Container } from "react-bootstrap";

import "./bannerApk.css";

const BannerApk = () => {
  return (
    <>
      <section className="bannerApk">
        <Container>
          <div className="bannerApk-description">
            <h2 className="bannerApk-title">اپلیکیشن آسنا</h2>
            <p className="bannerApk-contnet">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفادهاز طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته
            </p>
          </div>
          <div className="bannerApk-btns-group">
            <button className="bannerApk-btn">دانلود از بازار</button>
            <button className="bannerApk-btn">دانلود از گوگل پلی</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BannerApk;
