import React, { useEffect, useState } from "react";
import { getPacientes } from "../../../api/auth.js";
import HistoriaClinicaModal from "./HistoriaClinicaModal";

function PacientesDashboard() {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    getPacientes()
      .then((response) => {
        //console.log(response);
        setPaciente(response.data);
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
              {paciente
                .sort((a, b) => a.nombreCompleto - b.nombreCompleto)
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index}</td>
                    <td>{item.nombreCompleto}</td>
                    <td>{item.DNI}</td>
                    <td className="text-center">{item.edad}</td>
                    <td>{item.email}</td>
                    <td>{item.obraSocial}</td>
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
