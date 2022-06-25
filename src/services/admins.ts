import {
  ICreateAdminResponse,
  IDeleteAdmin,
  IGetAdminByIdResponse,
  IGetAdminByNameResponse,
  IGetAdminsResponse,
  IGetTotalAdminsResponse,
} from "../interfaces/api/admin/admins";
import { ICreateAdminForm } from "../interfaces/forms/admin/admins";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_ADMINS: "/admin/admins",
};

export const getAdmins = () => {
  const token = store.getState().auth.token;
  return apiService<IGetAdminsResponse, any>(
    URL.BASE_ADMINS,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getAdminByName = (data: { name: string }) => {
  const token = store.getState().auth.token;
  return apiService<IGetAdminByNameResponse, any>(
    URL.BASE_ADMINS + `/search?name=${data.name}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getTotalAdmins = () => {
  const token = store.getState().auth.token;
  return apiService<IGetTotalAdminsResponse, any>(
    URL.BASE_ADMINS + `/count`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getAdminById = (data: { id: number }) => {
  return apiService<IGetAdminByIdResponse, any>(
    URL.BASE_ADMINS + `/${data.id}`,
    methodServices.GET
  );
};

export const createNewAdmin = (data: ICreateAdminForm) => {
  const token = store.getState().auth.token;
  return apiService<ICreateAdminResponse, any>(
    URL.BASE_ADMINS,
    methodServices.POST,
    data,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const deleteAdmin = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IDeleteAdmin, any>(
    URL.BASE_ADMINS + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};
