import {
  IGetCourseByIdResponse,
  IGetCoursesResponse,
} from "../interfaces/api/admin/courses";
import { ICreateCourseForm } from "../interfaces/forms/admin/courses";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_COURSES: "/admin/courses",
};

export const getCourses = () => {
  const token = store.getState().auth.token;
  return apiService<IGetCoursesResponse, any>(
    URL.BASE_COURSES,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getCoursesByTitle = (data: { title: string }) => {
  const token = store.getState().auth.token;
  return apiService<IGetCoursesResponse, any>(
    URL.BASE_COURSES + `/search?title=${data.title}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getCourseById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetCourseByIdResponse, any>(
    URL.BASE_COURSES + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const createNewCourse = (data: ICreateCourseForm) => {
  const token = store.getState().auth.token;
  const fd = new FormData();
  for (const [key, value] of Object.entries(data)) {
    fd.append(key, value);
  }
  return apiService<IGetCoursesResponse, any>(
    URL.BASE_COURSES + "/create",
    methodServices.POST,
    fd,
    null,
    { Authorization: `Bearer ${token}` },
    true
  );
};

export const deleteCourse = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetCoursesResponse, any>(
    URL.BASE_COURSES + `/${data.id}`,
    methodServices.DELETE,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const toggleStatusCourse = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IGetCoursesResponse, any>(
    URL.BASE_COURSES + `/${data.id}`,
    methodServices.PATCH,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
