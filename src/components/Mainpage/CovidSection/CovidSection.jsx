import React from "react";
import CarouselDescription from "../InitialCarouselSection/CarouselDescription";

const CovidSection = () => {
  const covidDescription = `Debido a la situacion actual de Covid-19, la Dra. Elizabeth
                  Sonrisas solo esta atendiendo urgencias, Las atenciones se
                  realizan, una a la mañana y otra a la tarde para cumplir el
                  protocolo de seguridad sanitaria. Para poder determinar las
                  urgencias, debera completar y enviar el formulario con sus
                  datos, dar una breve descripcion de su situacion y sintomas,
                  tabmein adjunte una foto mostrando el problema bucal. Una vez
                  que la doctora examine la foto se comunicara para darle el
                  diagnostico. En el caso de que sea una urgencia se programara
                  el dia y horario de la practica dental.
                  Por favor, disculpe las molestias ocasionadas.
                  `;

  return (
    <>
      <section id="covidSection">
        <div className="container-fluid padding-container-covid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 highlight-covid rounded-right-background-covid">
              <div className="text-covid">
                <h1>PROTOCOLO COVID-19:</h1>
                <h2>Informacion Importante.</h2>

                <CarouselDescription description={covidDescription} />

                <div className="atte-text-covid">
                  <p>Atentamente:</p>
                  <p>Dra: Elizabeth Sonrisa</p>
                  <p>Odontologo Adultos, Niños y Adolescentes</p>
                  <p>Matricula Nacional N° 548324</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 highlight-covid-gif rounded-left-background-covid gifs-column">
              <div className="row">
                <div className="col col12-gif d-flex justify-content-center align-items-center">
                  <img src="images/covid_2.gif" alt="" className="gif-1" />
                  <img src="images/covid_1.gif" alt="" className="gif-2" />
                </div>
              </div>

              <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                  <img src="images/covid_1.gif" alt="" className="gif-3" />
                  <img src="images/covid_3.gif" alt="" className="gif-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidSection;
