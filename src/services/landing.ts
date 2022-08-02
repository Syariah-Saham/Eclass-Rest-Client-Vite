import { ICourse } from "../interfaces/course-model";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_LANDING: "landing",
};

export const landingGetCourses = () => {
  return apiService<{ courses: ICourse[] }, any>(
    URL.BASE_LANDING + `/courses`,
    methodServices.GET,
    null,
    null
  );
};
