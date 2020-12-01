import React, { useState } from "react";
import moment from "moment";

function PagarModal({ cita }) {
  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-success"
          disabled={cita.estado_pago === "PAGADO" ? true : false}
          data-toggle="modal"
          data-target={`#modalDetalle-id${cita.cita_id}`}
        >
          PAGAR
        </button>

        {/* <div className="modal" id={`modalDetalle-id${reclamo.ticket_id}`}> */}
        <div className="modal" id={`modalDetalle-id${cita.cita_id}`}>
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
                    <div class="form-group">
                      <label for="username">
                        <h6>Nombre del titular</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Nombre del titular"
                        required
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <label for="cardNumber">
                        <h6>Número de tarjeta</h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Número de tarjeta valido"
                          class="form-control "
                          required
                        />
                        <div class="input-group-append">
                          <span class="input-group-text text-muted">
                            <i class="fab fa-cc-visa mx-1"></i>
                            <i class="fab fa-cc-mastercard mx-1"></i>
                            <i class="fab fa-cc-amex mx-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label>
                            <span class="hidden-xs">
                              <h6>Fecha de expiración</h6>
                            </span>
                          </label>
                          <div class="input-group">
                            <input
                              type="number"
                              placeholder="Mes"
                              name=""
                              class="form-control"
                              min="1"
                              max="12"
                              required
                            />
                            <input
                              type="number"
                              placeholder="Año"
                              name=""
                              class="form-control"
                              min="2020"
                              max="9999"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group mb-4">
                          <label>
                            <h6>Codigo de Seguridad</h6>
                          </label>
                          <input type="text" required class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <button type="button" class="btn btn-success btn-block">
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
