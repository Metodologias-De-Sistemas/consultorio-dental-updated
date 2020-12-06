import axios from "axios";
import { getCookie } from "../helpers/cookies";
import moment from "moment";

const baseUrl = "http://localhost:3001/api";

export const registrarUsuario = async (informacionRegistro) => {
  const url = `${baseUrl}/pacientes/registro`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.post(url, informacionRegistro, config);

  return data;
};

export const logearUsuario = async (credenciales) => {
  const url = `${baseUrl}/login`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.post(url, credenciales, config);

  // console.log("USER DATA");
  // console.log(data);

  return data;
};

export const crearTurno = async (informacionTurno) => {
  const token = getCookie("token");
  const url = `${baseUrl}/turnos`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.post(url, informacionTurno, config);

  return data;
};

export const getTurnos = async () => {
  const token = getCookie("token");
  const url = `${baseUrl}/turnos`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, config);
  //console.log(data);

  return data;
};

export const getPacientes = async () => {
  const token = getCookie("token");
  const url = `${baseUrl}/pacientes`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, config);
  //console.log(data);

  return data;
};

export const getTurnosPaciente = async (id) => {
  const token = getCookie("token");
  const url = `${baseUrl}/pacientes/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, config);
  console.log(data);

  return data;
};

export const getFechasOcupadas = async () => {
  const token = getCookie("token");
  const url = `${baseUrl}/turnos/ocupados`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  let { data } = await axios.get(url, config);

  //const date = ["2020-12-15", "2020-12-16"];

  if (!data.data) {
    data.data = [];
  }

  const parsedDates = data.data.map((item) => {
    return moment(item).toDate();
  });

  //console.log(parsedDates);

  return parsedDates;
};

export const borrarTurno = async (id) => {
  const token = getCookie("token");
  const url = `${baseUrl}/turnos/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.delete(url, config);

  return data;
};

export const editarTurno = async (id, obj) => {
  const token = getCookie("token");
  const url = `${baseUrl}/turnos/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.patch(url, obj, config);

  return data;
};

export const terminarTurno = async (id) => {
  const token = getCookie("token");
  const url = `${baseUrl}/consultas`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // falta implementar finalizar turno

  const { data } = await axios.post(url, id, config);

  return data;
};
