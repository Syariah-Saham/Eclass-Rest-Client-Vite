import { ILoginForm, IRegisterForm } from "../interfaces/auth";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_AUTH: "auth",
};

export const authRegister = (data: IRegisterForm) => {
  return apiService(URL.BASE_AUTH + "/register", methodServices.POST, data);
};

export const authLogin = (data: ILoginForm) => {
  const payload = { ...data, device_name: "web" };
  console.log(payload);
  return apiService(URL.BASE_AUTH + "/login", methodServices.POST, payload);
};

export const authLogout = () => {
  return apiService(URL.BASE_AUTH + "/logout", methodServices.POST);
};
