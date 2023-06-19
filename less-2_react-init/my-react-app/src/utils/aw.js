import axios from "axios";

const aw = (headers) => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers,
  });
};

const awBasic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 500,
});

export { aw, awBasic };
