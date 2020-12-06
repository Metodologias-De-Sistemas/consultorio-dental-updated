import React, { useEffect, useState } from "react";
import moment from "moment";
import { getTurnos, terminarTurno } from "../../../api/auth.js";
import DetalleModal from "./DetallesModal";

function CitasAceptadasDashboard() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    getTurnos()
      .then((response) => {
        const turnoPendientes = response.data.filter(
          (turno) => turno.estado === "ACEPTADO"
        );
        console.log(turnoPendientes);
        setTurnos(turnoPendientes);
      })
      .catch((err) => console.error(err));
  }, []);

  const finalizarTurno = (id) => {
    terminarTurno(id)
      .then((res) => console.log(res))
      .catch(console.error);

    window.location = "/admin/aceptados";
  };

  return (
    <div className="backgroundAdmin">
      <h1 className="py-5 backgroundAdminTitle text-white border-bottom border-warning borderCustom-10 text-center">
        CITAS ACEPTADAS
      </h1>

      <div
        className="mx-5 my-3 px-3 pt-4 rounded border border-warning "
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
                <th style={{ width: "12%" }}>PRESTACION</th>
                <th style={{ width: "8%" }}>ESTADO DE PAGO</th>
                <th style={{ width: "8%" }}>DETALLES</th>
                <th style={{ width: "8%" }}>IMAGEN</th>
                <th style={{ width: "8%" }}>FINALIZAR</th>
              </tr>
            </thead>
            <tbody>
              {turnos
                .sort(
                  (a, b) => moment(a.fecha).toDate() - moment(b.fecha).toDate()
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index}</td>
                    <td>{/* {item.paciente.nombreCompleto} */}</td>
                    <td>{moment(item.fecha).format("DD-MM-YYYY")}</td>
                    <td>
                      {item.horario >= 12
                        ? item.horario + "pm"
                        : item.horario + "am"}{" "}
                      hs
                    </td>
                    <td>{item.prestacion}</td>
                    <td>PAGADO</td>
                    <td>{/* <DetalleModal cita={item} /> */}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        // onClick={(e) => window.open("https://twitter.com/home")} // abro una nueva ventana con el link de la imagen.
                      >
                        IMAGEN
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => finalizarTurno(item.id)}
                      >
                        FINALIZAR
                      </button>
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

export default CitasAceptadasDashboard;
