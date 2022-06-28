import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const methodServices = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

const config = {
  baseURL: API_URL,
  timeout: 1000,
  withCredentials: true,
};

const instance: AxiosInstance = axios.create(config);

export const apiService = async <T, D>(
  url: string,
  method: string,
  data?: object | null,
  params?: object | null,
  headers?: AxiosRequestHeaders,
  isMultipart?: boolean
): Promise<AxiosResponse<T, D>> => {
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 6000,
    headers: {
      Accept: "application/json",
      "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
      ...headers,
    },
  });
  return service;
};
