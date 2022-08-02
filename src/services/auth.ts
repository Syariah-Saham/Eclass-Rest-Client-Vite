import {
  IAuthLoginResponse,
  IAuthRegisterResponse,
  ILoginForm,
  IRegisterForm,
} from "../interfaces/auth";
import { IUser } from "../interfaces/user-model";
import { store } from "../redux/store";
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

export const sendVerifyEmail = () => {
  const token = store.getState().auth.token;
  return apiService<{ status: string }, any>(
    URL.BASE_AUTH + "/verify-email",
    methodServices.POST,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const processVerificationEmail = (data: { path: string }) => {
  const token = store.getState().auth.token;
  return apiService<{ message: string; user: IUser }, any>(
    `/${data.path}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
