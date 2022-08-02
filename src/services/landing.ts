import { ICourse } from "../interfaces/course-model";
import { IUser } from "../interfaces/user-model";
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

export const landingGetMentors = () => {
  return apiService<{ mentors: IUser[] }, any>(
    URL.BASE_LANDING + `/mentors`,
    methodServices.GET,
    null,
    null
  );
};
