import React from "react";

import Header from "./../../components/header/Header";
import BannerHealth from "./../../components/bannerHealth/BannerHealth";
import Services from "./../../components/services/Services";
import BannerApk from "./../../components/bannerApk/BannerApk";
import ServicesDesc from "./../../components/servicesDesc/ServicesDesc";
import UsersOpn from "./../../components/usersOpn/UsersOpn";
import ApiBanner from "./../../components/apiBanner/ApiBanner";
import SelectedPosts from "../../components/selectedPosts/SelectedPosts";

import Footer from "./../../components/footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <BannerHealth />
      <Services />
      {/* <BannerApk /> */}
      <ServicesDesc />
      {/* <UsersOpn /> */}
      <ApiBanner />
      <SelectedPosts />
      <Footer />
    </>
  );
};

export default Main;
