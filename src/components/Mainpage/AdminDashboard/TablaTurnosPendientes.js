import React, { useState, useEffect } from 'react';
import { getTurnos } from '../../../api/auth.js';
import { DataTable } from 'react-data-table-component';
import TableButton from './TableButton';

const TablaTurnosPendientes = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    getTurnos()
      .then((response) => {
        const turnoPendientes = response.data.filter(
          (turno) => turno.estado === 'PENDIENTE',
        );
        setTurnos(turnoPendientes);
      })
      .catch((err) => console.error(err));
  }, []);

  const mostrarTablaTurno = () => {
    const columnas = [
      {
        name: 'Nombre',
        selector: 'paciente.nombreCompleto',
        sorteable: true,
      },
      {
        name: 'DNI',
        selector: 'paciente.DNI',
        sorteable: true,
      },
      {
        name: 'Email',
        selector: 'paciente.email',
        sorteable: true,
      },
      {
        name: 'Obra Social',
        selector: 'paciente.obraSocial',
        sorteable: true,
      },
      {
        name: 'Fecha',
        selector: 'fecha',
        sorteable: true,
      },
      {
        name: 'Horario',
        selector: 'horario',
        sorteable: true,
      },
      {
        name: 'Sintomas',
        selector: 'observacion',
        sorteable: true,
        grow: 1.5,
      },
      {
        cell: (row) => (
          <TableButton
            className="btn btn-success btn-sm"
            text="Aceptar"
            handleClick={() => console.log('aceptar')}
            id={row.id}
          />
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        cell: (row) => (
          <TableButton
            className="btn btn-danger btn-sm"
            text="Rechazar"
            handleClick={() => console.log('denegar')}
            id={row.id}
          />
        ),
      },
    ];

    return (
      <div className="table-responsive">
        <DataTable
          columns={columnas}
          data={turnos}
          title="Ver Turnos Pendientes"
        />
      </div>
    );
  };

  return <div>{mostrarTablaTurno()}</div>;
};

export default TablaTurnosPendientes;
