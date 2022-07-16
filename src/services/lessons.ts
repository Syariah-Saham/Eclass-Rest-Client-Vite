import {
  ICreateLessonResponse,
  IDeleteLessonResponse,
  IGetLessonsResponse,
} from "../interfaces/api/admin/lessons";
import { ICreateLessonForm } from "../interfaces/forms/admin/lessons";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_LESSONS: "/admin/lessons",
};

export const getLessons = () => {
  const token = store.getState().auth.token;
  return apiService<IGetLessonsResponse, any>(
    URL.BASE_LESSONS,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const createNewLesson = (data: ICreateLessonForm) => {
  const token = store.getState().auth.token;
  return apiService<ICreateLessonResponse, any>(
    URL.BASE_LESSONS,
    methodServices.POST,
    data,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const deleteLesson = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IDeleteLessonResponse, any>(
    URL.BASE_LESSONS + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
