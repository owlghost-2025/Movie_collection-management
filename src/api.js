import axios from "axios";

const api = axios.create({
  baseURL: "https://6ab8b242f84897980b722e5d.mockapi.io/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
