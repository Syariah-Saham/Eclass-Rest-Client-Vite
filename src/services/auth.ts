import {
  IAuthLoginResponse,
  IAuthRegisterResponse,
  ILoginForm,
  IRegisterForm,
} from "../interfaces/auth";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_AUTH: "auth",
};

export const authRegister = (data: IRegisterForm) => {
  return apiService<IAuthRegisterResponse, any>(
    URL.BASE_AUTH + "/register",
    methodServices.POST,
    data
  );
};

export const authLogin = (data: ILoginForm) => {
  const payload = { ...data, device_name: "web" };
  return apiService<IAuthLoginResponse, any>(
    URL.BASE_AUTH + "/login",
    methodServices.POST,
    payload
  );
};

export const authLogout = () => {
  return apiService(URL.BASE_AUTH + "/logout", methodServices.POST);
};
