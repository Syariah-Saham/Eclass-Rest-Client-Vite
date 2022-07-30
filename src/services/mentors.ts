import {
  ICreateMentorResponse,
  IDeleteMentorResponse,
  IGetMentorByIdResponse,
  IGetMentorByNameResponse,
  IGetMentorsResponse,
  IGetTotalMentorsResponse,
} from "../interfaces/api/admin/mentors";
import { ICreateMentorForm } from "../interfaces/forms/admin/mentors";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_MENTORS: "/admin/mentors",
};

export const getMentors = () => {
  const token = store.getState().auth.token;
  return apiService<IGetMentorsResponse, any>(
    URL.BASE_MENTORS,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getMentorByName = (data: { name: string }) => {
  const token = store.getState().auth.token;
  return apiService<IGetMentorByNameResponse, any>(
    URL.BASE_MENTORS + `/search?name=${data.name}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getTotalMentors = () => {
  const token = store.getState().auth.token;
  return apiService<IGetTotalMentorsResponse, any>(
    URL.BASE_MENTORS + `/count`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getSomeMentors = (data: { item: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetMentorsResponse, any>(
    URL.BASE_MENTORS + `/take?item=${data.item}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getMentorById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetMentorByIdResponse, any>(
    URL.BASE_MENTORS + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const createNewMentor = (data: ICreateMentorForm) => {
  const token = store.getState().auth.token;
  const fd = new FormData();
  for (const [key, value] of Object.entries(data)) {
    fd.append(key, value);
  }
  return apiService<ICreateMentorResponse, any>(
    URL.BASE_MENTORS,
    methodServices.POST,
    fd,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const deleteMentor = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IDeleteMentorResponse, any>(
    URL.BASE_MENTORS + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};
