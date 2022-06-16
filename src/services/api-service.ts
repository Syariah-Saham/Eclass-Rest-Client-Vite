import axios from "axios";

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
};

/* const getHeaders = async (isMultipart: boolean) => {
  return {
    Accept: "application/json",
    "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
  };
}; */

const instance = axios.create(config);

/* instance.interceptors.request.use(async (request) => {
  request.headers = getHeaders(request.multipart);
  return request;
}); */

export const apiService = async (
  url: string,
  method: string,
  data?: object,
  params?: object
  // multipart = false
) => {
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 6000,
    // multipart: multipart
  });
  return service;
};
