import axios from "axios";
import { getCookie } from "../helpers/cookies";

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signup", data, config);

  return response;
};

export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/signin", data, config);

  return response;
};

export const cita = async (data) => {
  const token = getCookie("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post("/api/cita", data, config);

  return response;
};
