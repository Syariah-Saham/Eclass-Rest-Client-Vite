import {
  ICreateLessonResponse,
  IDeleteLessonResponse,
  IGetLessonByIdResponse,
  IGetLessonsByCourseResponse,
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

export const getLessonById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetLessonByIdResponse, any>(
    URL.BASE_LESSONS + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getLessonByCourse = (data: { courseId: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetLessonsByCourseResponse, any>(
    URL.BASE_LESSONS + `/course/${data.courseId}`,
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

export const updateDescriptionLesson = (data: {
  id: number;
  description: string;
}) => {
  const token = store.getState().auth.token;
  return apiService<{ message: string }, any>(
    URL.BASE_LESSONS + `/${data.id}/description`,
    methodServices.PATCH,
    data,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
