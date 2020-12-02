import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import BackgroundImage from "../../../assets/la-clinica-blur.png";
import BackgroundImage2 from "../../../assets/plus.svg";
import { getTurnos } from "../../../api/auth.js";

function AdminDashboard() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    getTurnos()
      .then((response) => {
        const turnoPendientes = response.data.filter(
          (turno) => turno.estado === "PENDIENTE"
        );
        console.log(turnoPendientes);
        setTurnos(turnoPendientes);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="backgroundAdmin">
      <h1 className="py-5 backgroundAdminTitle text-white border-bottom border-primary borderCustom-10 text-center">
        CITAS PENDIENTES
      </h1>

      <div
        className="mx-5 my-3 px-3 pt-4 rounded border border-primary "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <table className="table-responsive ">
          <table className="table text-white ">
            <thead>
              <tr>
                <th></th>
                <th>NOMBRE</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>DETALLES</th>
                <th>IMAGEN</th>
                <th>EDITAR</th>
                <th>PRESTACION</th>
                <th>ACEPTAR</th>
                <th>RECHAZAR</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.paciente.nombreCompleto}</td>
                  <td>{moment(item.fecha).format("DD-MM-YYYY")}</td>
                  <td>
                    {item.horario >= 12
                      ? item.horario + "pm"
                      : item.horario + "am"}{" "}
                    hs
                  </td>
                  <td>
                    <button className="btn btn-primary">DETALLES</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">IMAGEN</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">EDITAR</button>
                  </td>
                  <td>
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </td>

                  <td style={{}}>
                    <button className="btn btn-success">ACEPTAR</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">RECHAZAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
