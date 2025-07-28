import axios, { AxiosResponse } from "axios";
import { store } from "../store/store";
import { clearUser } from "../store/slice/userSlice";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState()?.user?.token;
    console.log(token);
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${token}`;
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
    if (error?.status === 401 || error?.status === 403) {
      store.dispatch(clearUser());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
