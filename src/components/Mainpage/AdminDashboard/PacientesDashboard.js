import React, { useEffect, useState } from "react";
import moment from "moment";
import { getTurnos } from "../../../api/auth.js";
import HistoriaClinicaModal from "./HistoriaClinicaModal";

function PacientesDashboard() {
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
      <h1 className="py-5 backgroundAdminTitle text-white border-bottom border-danger borderCustom-10 text-center">
        PACIENTES
      </h1>

      <div
        className="mx-5 my-3 px-3 pt-4 rounded border border-danger "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <table className="table-responsive ">
          <table className="table text-white ">
            <thead>
              <tr>
                <th style={{ width: "2%" }}></th>
                <th style={{ width: "8%" }}>NOMBRE</th>
                <th style={{ width: "4%" }}>DNI</th>
                <th style={{ width: "5%" }} className="text-center">
                  EDAD
                </th>
                <th style={{ width: "6%" }}>EMAIL</th>
                <th style={{ width: "6%" }}>OBRA SOCIAL</th>
                <th style={{ width: "3%" }}>HISTORIA CLINICA</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.paciente.nombreCompleto}</td>
                  <td>{item.paciente.DNI}</td>
                  <td className="text-center">{item.paciente.edad}</td>
                  <td>{item.paciente.email}</td>
                  <td>{item.paciente.obraSocial}</td>
                  <td>
                    <HistoriaClinicaModal cita={item} />
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

export default PacientesDashboard;
