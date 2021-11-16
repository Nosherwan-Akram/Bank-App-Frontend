import axios from "axios";
import { environment } from "config";

export const backendAxios = axios.create({ baseURL: environment.backend });

export const setHeaders = (): void => {
  backendAxios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("authToken");
};

export const removeHeaders = (): void => {
  backendAxios.defaults.headers.common["Authorization"] = null;
};
