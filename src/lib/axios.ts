import axios from "axios";

const api = axios.create({
  baseURL: "https://devblog-api-q9ij.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
