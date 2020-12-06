import React, { useState } from "react";
import moment from "moment";

function PagarModal({ cita }) {
  // const pagarTurno = () => {
  //   const data = {
  //     numTarjeta: tarjeta,
  //     totalAPagar: precio,
  //     turno: cita.id
  //   }
  // }

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-success"
          disabled={cita.pago === "PAGADO" ? true : false}
          data-toggle="modal"
          data-target={`#modalDetalle-id${cita.id}`}
        >
          PAGAR
        </button>

        {/* <div className="modal" id={`modalDetalle-id${reclamo.ticket_id}`}> */}
        <div className="modal" id={`modalDetalle-id${cita.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">PAGAR CITA</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div>
                  <form role="form">
                    {/* Card Owner */}
                    <div className="form-group">
                      <label for="username">
                        <h6>Nombre del titular</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Nombre del titular"
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label for="cardNumber">
                        <h6>Número de tarjeta</h6>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Número de tarjeta valido"
                          className="form-control "
                          required
                        />
                        <div className="input-group-append">
                          <span className="input-group-text text-muted">
                            <i className="fab fa-cc-visa mx-1"></i>
                            <i className="fab fa-cc-mastercard mx-1"></i>
                            <i className="fab fa-cc-amex mx-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label>
                            <span className="hidden-xs">
                              <h6>Fecha de expiración</h6>
                            </span>
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              placeholder="Mes"
                              name=""
                              className="form-control"
                              min="1"
                              max="12"
                              required
                            />
                            <input
                              type="number"
                              placeholder="Año"
                              name=""
                              className="form-control"
                              min="2020"
                              max="9999"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group mb-4">
                          <label>
                            <h6>Codigo de Seguridad</h6>
                          </label>
                          <input
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                      >
                        PAGAR - $600
                      </button>
                    </div>
                  </form>
                </div>

                {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagarModal;
