import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getTurnos, borrarTurno, editarTurno } from '../../../api/auth';
import TableButton from './TableButton';

const AdminDashboard = () => {
  const [turnos, setTurnos] = useState([]);
  const [select, setSelect] = useState('');

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

  const handleBorrarTurno = async (id) => {
    await borrarTurno(id);

    const nuevosTurnos = turnos.filter((turno) => turno.id === id);

    setTurnos(nuevosTurnos);
  };

  const handleAceptarTurno = async (id) => {
    const data = {
      estado: 'ACEPTADO',
      prestacion: `${select}`,
    };

    await editarTurno(id, data);

    const nuevosTurnos = turnos.filter((turno) => turno.id !== id);
    setTurnos(nuevosTurnos);
  };

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
            handleClick={() => handleAceptarTurno(row.id)}
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
            handleClick={() => handleBorrarTurno(row.id)}
            id={row.id}
          />
        ),
      },
      {
        cell: (row) => (
          <select
            onChange={({ target }) => {
              setSelect(target.value);
            }}
          >
            <option value=""> Elija Horario de la cita</option>
            <option value="RELEVAMIENTO BUCAL">RELEVAMIENTO BUCAL</option>
            <option value="RESTAURACION DE PIEZAS DENTALES">
              RESTAURACION DE PIEZAS DENTALES{' '}
            </option>
            <option value="TRATAMIENTO DE CARIES">
              TRATAMIENTO DE CARIES{' '}
            </option>
            <option value="ENDODONCIA">ENDODONCIA </option>
            <option value="EXTRACCION DE PIZAS DENTALES">
              EXTRACCION DE PIZAS DENTALES{' '}
            </option>
            <option value="LIMPIEZA BUCAL">LIMPIEZA BUCAL </option>
            <option value="RETRACCION GINGIVAL">RETRACCION GINGIVAL </option>
            <option value="BLANQUEAMIENTO BUCAL">BLANQUEAMIENTO BUCAL</option>
            <option value="CARILLAS DE CERAMICA">CARILLAS DE CERAMICA </option>
            <option value="CARILLAS DE PORCELANA">
              CARILLAS DE PORCELANA{' '}
            </option>
            <option value="CARILLAS DE CEROMEROS">
              CARILLAS DE CEROMEROS{' '}
            </option>
            <option value="IMPLANTES">IMPLANTES </option>
            <option value="ORTODONCIA ESTETICA">ORTODONCIA ESTETICA</option>
          </select>
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

export default AdminDashboard;
