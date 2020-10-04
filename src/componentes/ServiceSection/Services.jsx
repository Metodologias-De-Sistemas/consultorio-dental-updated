import React from 'react';
import ServicesList from './ServicesList';

const arrPrestacionesDentales = [
  'Relevamiento Bucal.',
  'Restauracion de piezas dentales.',
  'Tratamiento de Caries.',
  'Endodoncia (Tratamientos de conducto).',
  'Extraccion de piezas dentales.',
  'Limpieza Bucal.',
  'Reconstruccion de retraccion gingival.',
];
const arrPrestacionesEsteticas = [
  'Blanqueamiento Bucal.',
  'Carillas de Ceramica.',
  'Carillas de porcelana.',
  'Carillas de Ceromeros.',
  'Implantes.',
  'Ortodoncia estetica.',
];

const Services = () => {
  return (
    <>
      <section id="servicesSection">
        <div className="container-fluid padding-container-services ">
          <div className="row">
            <div className="col highlight rounded-right-background">
              <div className="text-services">
                <h1>PRESTACIONES</h1>
                <h1>DENTALES</h1>

                <ServicesList servicesArray={arrPrestacionesDentales} />

                <p>Solo urgencias. Leer protocolo para pautar una cita.</p>
              </div>
            </div>
            <div className="col highlight rounded-left-background">
              <div className="text-services">
                <h1>PRESTACIONES</h1>
                <h1>ESTÉTICAS</h1>

                <ServicesList servicesArray={arrPrestacionesEsteticas} />

                <p>
                  Temporalmente suspendido hasta nuevo aviso. Leer protocolo
                  para pautar una cita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
