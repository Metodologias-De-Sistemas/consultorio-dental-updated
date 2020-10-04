import React from 'react';
import BannerSocialMediaIcons from './BannerSocialMediaIcons';
import BannerContactInfo from './BannerContactInfo';

const Banner = () => {
  return (
    <section id="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 my-auto">
            <BannerContactInfo />
          </div>

          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img
              src="images/banner sonrisa feliz.png"
              alt="Imagen Representativa Sonrisa Feliz"
              className="sonrisaBannerImage"
            />
          </div>

          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <BannerSocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
