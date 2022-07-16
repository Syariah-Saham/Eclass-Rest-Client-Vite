import { ICourse, ICourseDetail } from "../../course-model";

export interface IGetCoursesResponse {
  courses: ICourse[];
}

export interface IGetCoursesByTitleResponse {
  courses: ICourse[];
}

export interface IGetCourseByIdResponse {
  course: ICourseDetail;
}

export interface ICreateCourseResponse {
  course: ICourse;
  message: string;
}

export interface IDeleteCourseResponse {
  message: string;
}

export interface IToggleStatusCourseResponse {
  message: string;
}
