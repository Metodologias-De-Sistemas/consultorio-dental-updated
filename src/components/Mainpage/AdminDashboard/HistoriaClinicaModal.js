import React, { useRef } from "react";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./HistoriaClinicaPDF";

function HistoriaClinicaModal({ cita }) {
  //const componentRef = useRef();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalDetalle-id${cita.id}`}
        >
          HISTORIA CLINICA
        </button>

        <div className="modal" id={`modalDetalle-id${cita.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">
                  HISTORIA CLINICA - {cita.nombreCompleto}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5>
                  <b>DETALLES DEL PACIENTE</b>
                </h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <b>Nombre:</b> {cita.nombreCompleto}
                  </li>
                  <li className="list-group-item">
                    <b>DNI:</b> {cita.DNI}
                  </li>
                  <li className="list-group-item">
                    <b>Edad:</b> {cita.edad}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b> {cita.email}
                  </li>
                  <li className="list-group-item">
                    <b>Obra Social:</b> {cita.obraSocial}
                  </li>
                </ul>
                <hr className="w-100 border border-primary" />
                <br />
                <h5 className="text-center">
                  <b>HISTORIA CLINICA</b>
                </h5>
                <br />
                {cita.historiaClinica.map((item, index) => (
                  <div className="card mb-2 border border-dark" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">CITA N° {index}</h5>
                      <hr className="w-100 border border-dark" />

                      <div className="row">
                        <div className="col-6">
                          <p style={{ fontWeight: "400" }}>
                            <b>FECHA: </b>
                            {moment(item.fecha).format("DD-MM-YYYY")}
                          </p>
                        </div>
                        <div className="col-6">
                          <p style={{ fontWeight: "400" }}>
                            <b>HORA: </b> {item.horario} hs
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <p style={{ fontWeight: "400" }}>
                            <b>SINTOMAS: </b> {item.sintomas}
                          </p>
                        </div>
                        <div className="col-6">
                          <p style={{ fontWeight: "400" }}>
                            <b>PRESTACION: </b> {item.prestacion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning mr-auto"
                  onClick={handlePrint}
                >
                  DESCARGAR
                </button>
                <div style={{ display: "none" }}>
                  <ComponentToPrint ref={componentRef} cita={cita} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoriaClinicaModal;
