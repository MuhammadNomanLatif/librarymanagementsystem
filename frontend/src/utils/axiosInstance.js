import axios from "axios";

const api = axios.create({
  baseURL: "https://api/v1", // your API base URL
  timeout: 10000, // optional timeout in ms
  headers: {
    "Content-Type": "application/json",
    // you can add auth headers here or dynamically later
  },
});

export default api;
