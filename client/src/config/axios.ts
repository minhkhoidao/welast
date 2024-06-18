import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT as string,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
