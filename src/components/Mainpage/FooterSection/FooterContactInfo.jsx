import React from "react";

const FooterContactInfo = () => {
  return (
    <>
      <div className="footer-info">
        <h2>Contáctenos</h2>
        <p>CONSULTORIO DE SALUD Y ESTETICO DENTAL</p>
        <p>"Sonrisa Feliz"</p>
        <p>French 414 - (H3500CHJ) Resistencia - Chaco</p>
        <p>(54-0362) 4432683 Fax: 4432928</p>
        <p>SonrisaFeliz@Company.com</p>
        <p>www.sonrisafeliz.com</p>
        <div>
          <a href="https://www.facebook.com/">
            <i
              className="fab fa-facebook-square fa-3x"
              style={{ color: "rgb(66,103,178)" }}
            ></i>
          </a>
          <a href="https://www.twitter.com/">
            <i
              className="fab fa-twitter-square fa-3x pl-2"
              style={{ color: "dodgerblue" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i
              className="fab fa-linkedin fa-3x pl-2"
              style={{ color: "rgb(40,103,178)" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/">
            <i
              className="fab fa-instagram-square fa-3x pl-2"
              style={{ color: "rgb(225,48,108)" }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterContactInfo;
