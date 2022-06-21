import {
  IDeleteMemberResponse,
  IGetMemberByIdResponse,
  IGetMemberByNameResponse,
  IGetMembersResponse,
} from "../interfaces/api/admin/members";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_MEMBERS: "/admin/members",
};

export const getMembers = () => {
  const token = store.getState().auth.token;
  return apiService<IGetMembersResponse, any>(
    URL.BASE_MEMBERS,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getMemberByName = (data: { name: string }) => {
  const token = store.getState().auth.token;
  return apiService<IGetMemberByNameResponse, any>(
    URL.BASE_MEMBERS + `/search?name=${data.name}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getMemberById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetMemberByIdResponse, any>(
    URL.BASE_MEMBERS + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const deleteMember = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IDeleteMemberResponse, any>(
    URL.BASE_MEMBERS + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};
