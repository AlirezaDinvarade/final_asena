import React from "react";

import womanImg from "./../../assets/images/pregnant-woman-533-396.png";
import aqiMapImg from "./../../assets/images/airquality-map-533-396.jpg";
import navImg from "./../../assets/images/navigation-533-396.png";

import "./servicesDesc.css";

const ServicesDesc = () => {
  return (
    <>
      <section className="servicesDesc-container">
        <div className="servicesDesc-card">
          <img className="servicesDesc-card-img" src={womanImg} alt="" />
          <div className="servicesDesc-card-content">
            <h2>کاربرد متناسب افراد مختلف</h2>
            <p>
              با تبدیل داده‌های آلودگی‌هوای محیط به بینش‌های شخصی‌سازی شده و
              قابل اجرا افراد مختلف مانند:
            </p>
            <ul>
              <li>
                گروه‌های حساس شامل افراد مبتلا به آسم، بیماری‌های تنفسی، قلبی و
                عروقی و...{" "}
              </li>
              <li>زنان باردار و کوکان</li>
              <li> افراد مسن </li>
              <li> سایر افراد</li>
            </ul>
            <p>
              این امکان را پیدا می‌کنند تا اقدامات احتیاطی ضروری برای پیشگیری از
              آسیب‌های آلودگی‌هوا را انجام دهند و تجربیات جذابشان را به یک شیوه
              زندگی تبدیل کنند.
            </p>
          </div>
        </div>
        <div className="servicesDesc-card">
          <img className="servicesDesc-card-img" src={aqiMapImg} alt="" />
          <div className="servicesDesc-card-content">
            <h2>پوشش سراسری و پیوسته با دقت بالا </h2>
            <p>
              با هوش محیطی که قابلیت پایش آنلاین و پیش‌بینی وضعیت آلودگی‌هوا در
              هرنقطه از شهر با طیف وسیعی از انواع آلاینده‌ها با دقت بالا را دارد
              شما ابزارهای موردنیاز برای تبدیل شدن به یک مرجع و برند معتبر و
              قابل اطمینان را خواهید داشت. دیگر ویژگی‌های پلتفرم هوش محیطی:
            </p>
            <ul>
              <li> استفاده از مدل‌سازی‌های دقیق هوش‌مصنوعی</li>
              <li>
                تخمین میزان غلظت آلاینده‌ها در نقاط فاقد ایستگاه‌های زمینی{" "}
              </li>
              <li>ایجاد پوشش سراسری و پیوسته</li>
            </ul>
          </div>
        </div>
        <div className="servicesDesc-card">
          <img className="servicesDesc-card-img" src={navImg} alt="" />
          <div className="servicesDesc-card-content">
            <h2>خدمات خودرومحور</h2>
            <p>
              رانندگان با استفاده از داده‌های آلودگی‌هوا در هر نقطه از شهر و
              اطلاعات محیطی میکرومحلی(آلاینده‌ها در فاصله 5 متری راننده) که از
              طریق رابط کاربری انسان و ماشین (HMI) بدست می‌آید قادر خواهند بود
              تصمیمات آگاهانه و پیشگیرانه مانند موارد زیر را اتخاذ کنند
            </p>
            <ul>
              <li>یافتن پاک ترین مسیر</li>
              <li>زمان مناسب باز یا بسته کردن پنجره‌های خودرو</li>
              <li>کاهش زمان قرارگیری در هوای آلوده </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDesc;
