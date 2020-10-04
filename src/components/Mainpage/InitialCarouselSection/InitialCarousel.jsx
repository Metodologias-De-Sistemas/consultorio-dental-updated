import React from 'react';
import CarouselDescription from './CarouselDescription';

const InitialCarousel = () => {
  const doctorDescription = `La Dra. Elizabeth Sonrisa es especialista en todas las areas
                    del cuidado dental integral, desde el tratamiento esteticos
                    o preventivo y las restauraciones simples hasta los
                    tratamientos de conducto, el trabajo de restauracion de
                    piezas dentales y el cuidado cosmetico.`;

  const covidDescription = `Debido a la situacion generada por Covid-19, Sonrisa Feliz a
                    establecido un estrictos protocolos de atencion al publico,
                    para que puedas recibir el tratamiento que necestias con
                    seguridad y la misma calidad de siempre.`;

  return (
    <>
      <section id="initialCarousel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner my-padding">
            <div className="carousel-item active first-slide">
              <div className="row">
                <div className="col-lg-6 my-auto background-text-carousel">
                  <h1>
                    Tecnologia de Ultima Generacion & Una dentista profesional
                  </h1>

                  <CarouselDescription description={doctorDescription} />
                </div>
                <div className="col-lg-6">
                  <img src="images/Dr feliz.png" class="" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item second-slide">
              <div className="row">
                <div className="col-lg-6 my-auto background-text-carousel">
                  <h1>Nos preocupamos por tu salud</h1>

                  <CarouselDescription description={covidDescription} />
                </div>
                <div className="col-lg-6">
                  <img src="images/foto 2.png" class="" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item third-slide">
              <div className="row">
                <div className="col-lg-6 my-auto background-text-carousel">
                  <h1>Promocion especial Tuya, Mutuales & Obras sociales</h1>
                  <ul>
                    <li> Atendemos todas las obras sociales y mutuales.</li>
                    <li> Promocion especial Tarjeta Tuya.</li>
                    <li> 5,10,15 y 20 con costo financiero reducido.</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <img src="images/foto 3.png" class="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitialCarousel;
