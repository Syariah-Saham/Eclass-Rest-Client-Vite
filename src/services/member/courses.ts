import { apiService, methodServices } from "../api-service";
import { store } from "../../redux/store";
import {
  IMGetCoursesByTitleResponse,
  IMGetCoursesResponse,
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
