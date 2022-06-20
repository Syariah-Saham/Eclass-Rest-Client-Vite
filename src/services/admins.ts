import {
  ICreateAdminResponse,
  IDeleteAdmin,
  IGetAdminByIdResponse,
  IGetAdminByNameResponse,
  IGetAdminsResponse,
} from "../interfaces/api/admin/admins";
import { ICreateAdminForm } from "../interfaces/forms/admin/admins";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_ADMINS: "/admins/admins",
};

export const getAdmins = () => {
  return apiService<IGetAdminsResponse, any>(
    URL.BASE_ADMINS,
    methodServices.GET
  );
};

export const getAdminByName = (data: { name: string }) => {
  return apiService<IGetAdminByNameResponse, any>(
    URL.BASE_ADMINS + `/search?name=${data.name}`,
    methodServices.GET
  );
};

export const getAdminById = (data: { id: number }) => {
  return apiService<IGetAdminByIdResponse, any>(
    URL.BASE_ADMINS + `/${data.id}`,
    methodServices.GET
  );
};

export const createNewAdmin = (data: ICreateAdminForm) => {
  return apiService<ICreateAdminResponse, any>(
    URL.BASE_ADMINS,
    methodServices.POST,
    data
  );
};

export const deleteAdmin = (data: { id: number }) => {
  return apiService<IDeleteAdmin, any>(
    URL.BASE_ADMINS + `/${data.id}`,
    methodServices.DELETE
  );
};
