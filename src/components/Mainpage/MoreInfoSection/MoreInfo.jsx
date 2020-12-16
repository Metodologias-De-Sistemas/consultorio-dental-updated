import React from "react";

const Services = () => {
  return (
    <>
      <section id="moreInfoSection">
        <div className="container-fluid padding-container-services">
          <div className="row">
            <div
              className="col-lg-6 highlight pl-4"
              style={{ paddingBottom: "3%", paddingTop: "5%" }}
            >
              <h1>Nos preocupamos por tu salud</h1>

              <p>
                La Dra. Elizabeth Sonrisa es especialista en todas las areas del
                cuidado dental integral, desde el tratamiento esteticos o
                preventivo y las restauraciones simples hasta los tratamientos
                de conducto, el trabajo de restauracion de piezas dentales y el
                cuidado cosmetico.
              </p>
              <div className="d-flex justify-content-center">
                <img
                  src="images/foto 2 nb.png"
                  alt=""
                  style={{ height: "265px" }}
                  className="mt-5"
                />
              </div>
            </div>
            <div
              className="col-lg-6 highlight pl-4"
              style={{ paddingBottom: "3%", paddingTop: "5%" }}
            >
              <h1>Promocion especial Tuya, Mutuales & Obras sociales</h1>
              <ul>
                <li>
                  <b>Atendemos todas las obras sociales y mutuales.</b>
                </li>
                <li>
                  <b>Promocion especial Tarjeta Tuya.</b>
                </li>
                <li>
                  <b>5,10,15 y 20 con costo financiero reducido.</b>
                </li>
              </ul>

              <div className="d-flex justify-content-center">
                <img
                  src="images/foto 3.png"
                  alt=""
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{ backgroundColor: "rgba(95, 148, 190, 0.774)" }}
          >
            <h2>Descarga nuestra APP</h2>
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{ backgroundColor: "rgba(95, 148, 190, 0.774)" }}
          >
            <div className="py-3">
              <button className="btn btn-warning">
                <b>DESCARGAR</b>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
