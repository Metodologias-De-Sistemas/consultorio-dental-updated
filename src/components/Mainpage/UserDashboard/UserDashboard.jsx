import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import BackgroundImage from "../../../assets/la-clinica-blur.png";
import PagarModal from "../UserDashboard/PagarModal";
import { getTurnosPaciente } from "../../../api/auth.js";
import { isAuthenticated } from "../../../helpers/auth";
import { getLocalStorage } from "../../../helpers/localStorage";

function UserDashboard() {
  const [userData, setUserData] = useState([]);

  //console.log(isAuthenticated());

  // const res = getTurnosPaciente();

  useEffect(() => {
    const id = getLocalStorage("user").id;
    getTurnosPaciente(id).then((res) => setUserData(res.data));
  }, []);

  let turnosProximos = userData.turnosProximos;

  if (!turnosProximos) {
    turnosProximos = [];
  }

  console.log(turnosProximos);

  // const turnosProximos = userData.data.map((item) => {
  //   return item.turnosProximos;
  // });

  // console.log(turnosProximos);

  const jsonData = [
    {
      cita_id: 1,
      fecha: "10-12-2020",
      hora: 6,
      trabajo: "Limpieza Bocal",
      estado_cita: "ACEPTADO",
      estado_pago: "PAGADO",
      pago_id: 1,
    },
    {
      cita_id: 2,
      fecha: "11-12-2020",
      hora: 19,
      trabajo: "Tratamiento de conducto",
      estado_cita: "ACEPTADO",
      estado_pago: "NO PAGADO",
      pago_id: 2,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url(" + BackgroundImage + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="px-5 pt-5">CITAS</h1>

      <div
        className="mx-5  my-3 px-5 py-5 rounded border border-warning "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <table className="table-responsive">
          <table className="table text-white">
            <thead>
              <tr>
                <th>N° CITA</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>SINTOMAS</th>
                <th>PRESTACION</th>
                <th>ESTADO DE PAGO</th>
                <th>PAGAR</th>
                <th>FACTURA</th>
              </tr>
            </thead>
            <tbody>
              {turnosProximos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.fecha}</td>
                  <td>{item.horario} hs</td>
                  <td>{item.observacion}</td>
                  <td>{!item.prestacion ? "NO ASIGNADO" : item.prestacion}</td>
                  <td
                    className={
                      item.pago === "PAGADO"
                        ? "font-weight-bold text-success"
                        : "font-weight-bold text-danger"
                    }
                  >
                    {item.pago}
                  </td>
                  <td>
                    <PagarModal cita={item} />
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      disabled={item.pago === "PAGADO" ? false : true}
                    >
                      FACTURA
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

export default UserDashboard;
