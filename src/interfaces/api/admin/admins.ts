import { IPagination } from "../../pagination";
import { IUser } from "../../user-model";

export interface IAdminsResponse extends IPagination {
  data: IUser[];
}

export interface IGetAdminsResponse {
  admins: IAdminsResponse;
}

export interface IGetAdminByNameResponse {
  admins: IUser[];
}

export interface IGetAdminByIdResponse {
  admin: IUser;
}

export interface ICreateAdminResponse {
  user: IUser;
  message: string;
}

export interface IDeleteAdmin {
  message: string;
}
