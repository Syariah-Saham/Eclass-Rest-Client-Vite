import { AxiosResponse } from "axios";
import { IUser } from "./user-model";

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IAuthRegisterResponse {
  user: IUser;
  message: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IAuthLoginResponse {
  token: string;
  user: IUser;
}

export type TLoginAction = Promise<
  AxiosResponse<IAuthLoginResponse, any> | unknown
>;
