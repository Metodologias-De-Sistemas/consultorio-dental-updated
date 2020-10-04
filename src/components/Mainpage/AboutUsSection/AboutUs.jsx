import React from 'react';
import DrProfileCard from './DrProfileCard';
import AboutUsDescription from './AboutUsDescription';

const AboutUs = () => {
  return (
    <>
      <section id="aboutUsSection">
        <div className="container-fluid padding-container-aboutUs ">
          <div className="row">
            <div className="col-lg-7 highlight-aboutUs rounded-right-background">
              <AboutUsDescription />
            </div>
            <div className="col-lg-5 highlight-aboutUs rounded-left-background hide-container-dra ">
              <DrProfileCard />
            </div>
          </div>
        </div>
      </section>

      <div className="aboutUs-movile-dra show-container-dra-movile">
        <div className="container-fluid padding-container-aboutUs ">
          <div className="highlight-aboutUs-dra-movile rounded-left-background-dra-movile d-flex justify-content-center align-items-center">
            <DrProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
