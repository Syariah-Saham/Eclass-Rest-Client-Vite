import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMGetAllCertificatesResponse,
  IMGetCertificateResponse,
  IMGetCourseByIdResponse,
  IMGetCoursesByTitleResponse,
  IMGetCoursesResponse,
  IMGetMyCoursesResponse,
} from "../../interfaces/api/member/courses";

const URL = {
  BASE_COURSES: "/member/courses",
};

export const getCourses = () => {
  const token = store.getState().auth.token;

  return apiService<IMGetCoursesResponse, any>(
    URL.BASE_COURSES,
    methodServices.GET,
    null,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const getMyCourses = () => {
  const token = store.getState().auth.token;
  return apiService<IMGetMyCoursesResponse, any>(
    URL.BASE_COURSES + `/my-courses`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getCoursesByTitle = (data: { title: string }) => {
  const token = store.getState().auth.token;
  return apiService<IMGetCoursesByTitleResponse, any>(
    URL.BASE_COURSES + `/search?title=${data.title}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getCourseById = (data: { id: number }) => {
  const token = store.getState().auth.token;
  return apiService<IMGetCourseByIdResponse, any>(
    URL.BASE_COURSES + `/${data.id}`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

export const getCertificate = (data: { id: string }) => {
  return apiService<IMGetCertificateResponse, any>(
    `/certificate/${data.id}`,
    methodServices.GET,
    null,
    null,
    {}
  );
};

export const getCertificates = () => {
  const token = store.getState().auth.token;
  return apiService<IMGetAllCertificatesResponse, any>(
    URL.BASE_COURSES + `/certificates`,
    methodServices.GET,
    null,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
