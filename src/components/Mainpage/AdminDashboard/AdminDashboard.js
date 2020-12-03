import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import BackgroundImage from "../../../assets/la-clinica-blur.png";
import BackgroundImage2 from "../../../assets/plus.svg";
import { getTurnos } from "../../../api/auth.js";
import DetalleModal from "./DetallesModal";
import AceptarModal from "./AceptarModal";
import EditarModal from "./EditarModal";
import muelita from "../../../assets/muelita.svg";

function AdminDashboard() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    getTurnos()
      .then((response) => {
        const turnoPendientes = response.data.filter(
          (turno) => turno.estado === "PENDIENTE"
        );
        //console.log(turnoPendientes);
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
                <th style={{ width: "2%" }}></th>
                <th style={{ width: "10%" }}>NOMBRE</th>
                <th style={{ width: "8%" }}>FECHA</th>
                <th style={{ width: "8%" }}>HORA</th>
                <th style={{ width: "8%" }}>DETALLES</th>
                <th style={{ width: "8%" }}>IMAGEN</th>
                <th style={{ width: "7%" }}>EDITAR</th>
                <th style={{ width: "6%" }}>ACEPTAR</th>
                <th style={{ width: "6%" }}>RECHAZAR</th>
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
                    <DetalleModal cita={item} />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      // onClick={(e) => window.open("https://twitter.com/home")} // abro una nueva ventana con el link de la imagen.
                    >
                      IMAGEN
                    </button>
                  </td>
                  <td>
                    <EditarModal cita={item} />
                  </td>

                  <td>
                    <AceptarModal cita={item} />
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
