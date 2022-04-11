import React from "react";
import { Container } from "react-bootstrap";
/* background image responsived
  image dimensions(w/h) to ~1.497
  image size not important 
  image type : jpg*/
import servicesCard1 from "./../../assets/images/servicesCard1.jpg";
import servicesCard2 from "./../../assets/images/servicesCard2.jpg";
import servicesCard3 from "./../../assets/images/servicesCard3.jpg";
import servicesCard4 from "./../../assets/images/servicesCard4.jpg";

import "./services.css";

const Services = () => {
  return (
    <>
      <section className="services-container">
        <Container>
          <div className="services-title">
            <h2>خدمات مبتنی بر تکنولوژی های روز دنیا</h2>
            <p>
              این خدمات بر پایه هوش مصنوعی برنامه ریزی شده <br /> در جهت مشاهده
              میزان آلودگی هوا و دیگر اطلاعات هواشناسی در دسترس می باشد
            </p>
          </div>
          <div className="services-cards-container">
            <div className="services-card">
              <img className="img-fluid" src={servicesCard1} alt="" />
              <h3>سلامت دیجیتال</h3>
              <p>
                پایبندی به درمان، تحقیقات بالینی، مشارکت بیمار، برنامه‌های
                بهداشتی شخصی‌سازی شده، نظارت از راه دور، مدیریت بیماری، آموزش
                افراد برای انجام اقدامات پیشگیرانه
              </p>
            </div>
            <div className="services-card">
              <img className="img-fluid" src={servicesCard2} alt="" />
              <h3>پایش هوای داخل مکان</h3>
              <p>
                خانه هوشمند، تهویه مطبوع و تصفیه‌هوای مبتنی بر اینترنت اشیاء،
                کنترل هوشمند هوا، کارایی سیستم، زمان مناسب فعال کردن
                تصفیه‌کننده‌هوا، زمان مناسب تعویض فیلترهوای تصفیه‌کننده‌هوا
              </p>
            </div>
            <div className="services-card">
              <img className="img-fluid" src={servicesCard3} alt="" />
              <h3>حمل و نقل شهری</h3>
              <p>
                انتخاب پاک‌ترین مسیر، پایش و تصفیه‌هوای داخل ماشین، برنامه‌های
                همراه راننده، هشدارهای به‌‌موقع، زمان مناسب بازکردن یا بستن
                شیشه‌های ماشین برای محافظت از آلودگی، کاهش زمان قرارگیری راننده
                در هوای سمی
              </p>
            </div>
            <div className="services-card">
              <img className="img-fluid" src={servicesCard4} alt="" />
              <h3>محافظت از پوست</h3>
              <p>
                ارائه خدمات برای درمانگران پوست، آموزش مراقبت از پوست، توصیه‌های
                بهداشتی شخصی‌سازی‌سازی جهت مراقبت از پوست، بیان ارتباط
                آلودگی‌هوا با پوست و مو
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
