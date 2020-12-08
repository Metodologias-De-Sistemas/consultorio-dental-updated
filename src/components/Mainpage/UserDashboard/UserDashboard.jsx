import React, { useEffect, useState } from "react";
import moment from "moment";
import BackgroundImage from "../../../assets/la-clinica-blur.png";
import PagarModal from "../UserDashboard/PagarModal";
import { getTurnosPaciente } from "../../../api/auth.js";
import { getLocalStorage } from "../../../helpers/localStorage";

function UserDashboard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const id = getLocalStorage("user").id;
    getTurnosPaciente(id).then((res) => setUserData(res.data));
  }, []);

  let turnosProximos = userData.turnosProximos;

  if (!turnosProximos) {
    turnosProximos = [];
  }

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
        className="mx-5  my-3 px-5 pt-5 rounded border border-warning "
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
              </tr>
            </thead>
            <tbody>
              {turnosProximos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{moment(item.fecha).format("DD-MM-YYYY")}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-white">
            * Cuando realize el pago de la consulta, recibira un email con el
            comprobante de pago.
          </p>
        </table>
      </div>
    </div>
  );
}

export default UserDashboard;
