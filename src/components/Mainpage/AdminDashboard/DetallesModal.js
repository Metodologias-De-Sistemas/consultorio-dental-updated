import React, { useState } from "react";
import moment from "moment";

function DetallesModal({ cita }) {
  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalDetalle-id${cita.id}`}
        >
          DETALLES
        </button>

        <div className="modal" id={`modalDetalle-id${cita.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">DETALLES DE LA CITA</h4>
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
                <h5>
                  <b>SINTOMAS</b>
                </h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">{cita.observacion}</li>
                </ul>
              </div>

              <div className="modal-footer">
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

export default DetallesModal;
