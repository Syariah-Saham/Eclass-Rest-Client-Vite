import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

const API_URL = "http://localhost:8000/api/";

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

/* const getHeaders = async (isMultipart: boolean) => {
  return {
    Accept: "application/json",
    "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
  };
}; */

const instance: AxiosInstance = axios.create(config);

/* instance.interceptors.request.use(async (request) => {
  request.headers = getHeaders(request.multipart);
  return request;
}); */

export const apiService = async <T, D>(
  url: string,
  method: string,
  data?: object | null,
  params?: object | null,
  headers?: AxiosRequestHeaders
  // multipart = false
): Promise<AxiosResponse<T, D>> => {
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 6000,
    headers: headers,
    // multipart: multipart
  });
  return service;
};
