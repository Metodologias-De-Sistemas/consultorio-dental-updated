import axios from 'axios';
import { getCookie } from '../helpers/cookies';

const baseUrl = 'http://localhost:3001/api';

export const registrarUsuario = async (informacionRegistro) => {
  const url = `${baseUrl}/pacientes/registro`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post(url, informacionRegistro, config);

  return data;
};

export const logearUsuario = async (credenciales) => {
  const url = `${baseUrl}/login`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post(url, credenciales, config);

  return data;
};

export const crearTurno = async (informacionTurno) => {
  const token = getCookie('token');
  const url = `${baseUrl}/turnos`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(url, informacionTurno, config);

  return data;
};
