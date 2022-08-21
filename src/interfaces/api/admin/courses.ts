import { ICourse, ICourseDetail, ICourseTiny } from "../../course-model";

export interface IGetCoursesResponse {
  courses: ICourse[];
}

export interface IGetCoursesTinyResponse {
  courses: ICourseTiny[];
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
