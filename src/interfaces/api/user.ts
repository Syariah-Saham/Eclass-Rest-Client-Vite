import { AxiosResponse } from "axios";

export interface IUpdateNameResponse {
  message: string;
}

export interface IUpdatePasswordResponse {
  message: string;
}

export type TUpdateNameAction = Promise<
  AxiosResponse<IUpdateNameResponse, any> | unknown
>;
