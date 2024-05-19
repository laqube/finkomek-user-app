import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const API_URL = apiKey;
export const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

// request interceptor for adding token to headers
API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

// response interceptor for refreshing token
API.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        return API.request(originalRequest);
      } catch (e) {
        console.error("Unauthorized");
        window.location.href = "/";
        localStorage.removeItem("token");
      }
    }
    throw error;
  }
);
