import React from 'react';

import Banner from './componentes/BannerSection/Banner';
import Navbar from './componentes/NavbarSection/Navbar';
import InitialCarousel from './componentes/InitialCarouselSection/InitialCarousel';
import Services from './componentes/ServiceSection/Services';
import AboutUs from './componentes/AboutUsSection/AboutUs';
import CovidSection from './componentes/CovidSection/CovidSection';
import Footer from './componentes/FooterSection/Footer';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <InitialCarousel />
      <Services />
      <AboutUs />
      <CovidSection />
      <Footer />
    </>
  );
};

export default App;
