import React from 'react';
import FooterContactInfo from './FooterContactInfo';

const Footer = () => {
  return (
    <>
      <section id="footerSection">
        <div className="container-fluid padding-container-footer">
          <div className="row">
            <div className="col-lg-8">
              <div className="footer-map">
                <iframe
                  title="googleMaps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.582768605608!2d-58.98126863494341!3d-27.451110882898753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0b9f2cdcd%3A0xb23d357b24feeb1b!2sCalle%20French%20414%2C%20H3500AHQ%20Resistencia%2C%20Chaco!5e0!3m2!1sen!2sar!4v1600050223510!5m2!1sen!2sar"
                  width="100%"
                  height="450"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>

            <div class="col-lg-4 d-flex align-items-center">
              <FooterContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
