import { IUser } from "../../user-model";

export interface IGetAdminsResponse {
  admins: IUser[];
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
