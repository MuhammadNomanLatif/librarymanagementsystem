import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1", // your API base URL
  withCredentials: true, // optional if you're using cookies

  // timeout: 10000, // optional timeout in ms
  // headers: {
  //   "Content-Type": "application/json",
  //   // you can add auth headers here or dynamically later
  // },
});

export default api;
