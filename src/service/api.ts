import axios, { AxiosResponse } from "axios";
import { store } from "../store/store";
import { clearUser } from "../store/slice/userSlice";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: { status: number }) => {
    if (error?.status === 401) {
      store.dispatch(clearUser());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
