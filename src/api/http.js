import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.0.34:5000",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default http;
