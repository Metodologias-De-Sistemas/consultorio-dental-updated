import React from "react";

function HistoriaClinicaModal({ cita }) {
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
                  HISTORIA CLINICA - {cita.paciente.nombreCompleto}
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
                    <b>Nombre:</b> {cita.paciente.nombreCompleto}
                  </li>
                  <li className="list-group-item">
                    <b>DNI:</b> {cita.paciente.DNI}
                  </li>
                  <li className="list-group-item">
                    <b>Edad:</b> {cita.paciente.edad}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b> {cita.paciente.email}
                  </li>
                  <li className="list-group-item">
                    <b>Obra Social:</b> {cita.paciente.obraSocial}
                  </li>
                </ul>
                <hr className="w-100 border border-primary" />
                <br />
                <h5 className="text-center">
                  <b>HISTORIA CLINICA</b>
                </h5>
                <br />
                {/* Todas las citas de la id del paciente que esten con estado PAGADO */}
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">CITA N° </h5>
                    <hr className="w-100 border border-dark" />
                    {/* <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <div className="row">
                      <div className="col-6">
                        <p style={{ fontWeight: "400" }}>
                          <b>FECHA: </b> 22/12/2020
                        </p>
                      </div>
                      <div className="col-6">
                        <p style={{ fontWeight: "400" }}>
                          <b>HORA: </b> 8hs
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p style={{ fontWeight: "400" }}>
                          <b>SINTOMAS: </b> Me duele la muela.
                        </p>
                      </div>
                      <div className="col-6">
                        <p style={{ fontWeight: "400" }}>
                          <b>PRESTACION: </b> Extraccion de Muela.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning mr-auto"
                  data-dismiss="modal"
                >
                  DESCARGAR
                </button>
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
