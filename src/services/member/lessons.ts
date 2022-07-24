import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMGetLessonByIdResponse,
  IMGetLessonsByCourseIdResponse,
  IMToggleStatusLessonResponse,
} from "../../interfaces/api/member/lessons";

const URL = {
  BASE_LESSONS: "/member/lessons",
};

export const getLessonsByCourseId = (data: { courseId: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMGetLessonsByCourseIdResponse, any>(
    URL.BASE_LESSONS + `/${data.courseId}/course`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getLessonById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMGetLessonByIdResponse, any>(
    URL.BASE_LESSONS + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const toggleStatusLessonLearning = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMToggleStatusLessonResponse, any>(
    URL.BASE_LESSONS + `/${data.id}/status`,
    methodServices.PATCH,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
