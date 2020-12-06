import React, { useState, useEffect } from "react";
import { getFechasOcupadas, editarTurno } from "../../../api/auth.js";
import DatePicker from "react-datepicker";
import moment from "moment";

function EditarModal({ cita }) {
  const [horario, setHorario] = useState("");
  const [fecha, setFecha] = useState("");
  const [fechasOcupadas, setFechasOcupadas] = useState([]);

  const editarCita = async () => {
    // logica de editar fecha
    if (horario === "") {
      console.log("Datos incompletos!");
    } else if (fecha === "") {
      console.log("Datos incompletos!");
    } else {
      // ahora editar fecha.
      //console.log(moment(fecha).format("YYYY-MM-DD") + " " + horario);
      const data = {
        fecha: moment(fecha).format("YYYY-MM-DD"),
        horario: horario,
      };
      await editarTurno(cita.id, data);

      window.location = "/admin/dashboard";
    }
  };

  useEffect(() => {
    getFechasOcupadas()
      .then((res) => setFechasOcupadas(res))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#modalEditar-id${cita.id}`}
        >
          EDITAR
        </button>

        <div className="modal" id={`modalEditar-id${cita.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">EDITAR CITA</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5>
                  <b>EDITAR FECHA DE CITA</b>
                </h5>

                {/* horario*/}
                <div className="form-group input-group">
                  <div className="input-group-prepend ">
                    <span className="input-group-text">
                      <i className="fas fa-clock"></i>
                    </span>
                  </div>
                  <select
                    className="custom-select "
                    id="inlineFormCustomSelect"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    name="horario"
                  >
                    <option value="" selected disabled>
                      Elija Horario de la cita
                    </option>
                    <option value="8">MAÑANA | 08:00hs - 09:00hs </option>
                    <option value="9">MAÑANA | 09:00hs - 10:00hs </option>
                    <option value="10">MAÑANA | 10:00hs - 11:00hs </option>
                    <option value="11">MAÑANA | 11:00hs - 12:00hs </option>
                    <option value="16">TARDE᲼᲼᲼ | 16:00hs - 17:00hs </option>
                    <option value="17">TARDE᲼᲼᲼ | 17:00hs - 18:00hs </option>
                    <option value="18">TARDE᲼᲼᲼ | 18:00hs - 19:00hs </option>
                  </select>
                </div>

                {/* Date Picker fecha cita*/}
                <div className="form-group input-group">
                  <div className="input-group-prepend ">
                    <span className="input-group-text">
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                  </div>
                  <DatePicker
                    placeholderText="Elija Fecha de la cita."
                    selected={fecha}
                    onChange={(fecha) => setFecha(fecha)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    filterDate={(date) =>
                      date.getDay() !== 6 && date.getDay() !== 0
                    }
                    excludeDates={fechasOcupadas}
                  />
                </div>
                {moment(fecha).format("DD-MM-YYYY") + " " + horario}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => editarCita()}
                >
                  Editar
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

export default EditarModal;
