import React, { useState, useEffect } from "react";
import moment from "moment";

function AceptarModal({ cita }) {
  const [prestacion, setPrestacion] = useState("");

  const aceptarCita = () => {
    console.log(prestacion + " " + cita.id);
  };

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target={`#modalAceptar-id${cita.id}`}
        >
          ACEPTAR
        </button>

        <div className="modal" id={`modalAceptar-id${cita.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">ACEPTAR CITA</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5>
                  <b>ELEGIR PRESTACION</b>
                </h5>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    value={prestacion}
                    onChange={(e) => setPrestacion(e.target.value)}
                  >
                    <option selected disabled value="">
                      Selecionar Prestacion
                    </option>
                    <option>RELEVAMIENTO BUCAL</option>
                    <option>RESTAURACION DE PIEZAS DENTALES</option>
                    <option>TRATAMIENTO DE CARIES</option>
                    <option>ENDODONCIA</option>
                    <option>EXTRACCION DE PIZAS DENTALES</option>
                    <option>LIMPIEZA BUCAL</option>
                    <option>RETRACCION GINGIVAL</option>
                    <option>BLANQUEAMIENTO BUCAL</option>
                    <option>CARILLAS DE CERAMICA</option>
                    <option>CARILLAS DE PORCELANA</option>
                    <option>CARILLAS DE CEROMEROS</option>
                    <option>IMPLANTES</option>
                    <option>ORTODONCIA ESTETICA</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={() => aceptarCita()}
                >
                  ACEPTAR
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

export default AceptarModal;
