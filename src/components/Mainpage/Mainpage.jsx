import React from "react";
// import Banner from "./BannerSection/Banner";
// import Navbar from "./NavbarSection/Navbar";
import InitialCarousel from "./InitialCarouselSection/InitialCarousel";
import Services from "./ServiceSection/Services";
import AboutUs from "./AboutUsSection/AboutUs";
import CovidSection from "./CovidSection/CovidSection";
import Footer from "./FooterSection/Footer";

const Mainpage = () => {
  return (
    <>
      {/* <Banner /> */}
      {/* <Navbar /> */}
      <InitialCarousel />
      <Services />
      <AboutUs />
      <CovidSection />
      <Footer />
    </>
  );
};

export default Mainpage;
