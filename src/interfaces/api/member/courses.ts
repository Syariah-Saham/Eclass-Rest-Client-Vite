import {
  ICertificate,
  ICourse,
  ICourseDetailMember,
  ICourseItemMember,
} from "../../course-model";

export interface IMGetCoursesResponse {
  courses: ICourseItemMember[];
}

export interface IMGetMyCoursesResponse {
  last_learning: ICourse;
  courses: ICourseItemMember[];
}

export interface IMGetCoursesByTitleResponse {
  courses: ICourseItemMember[];
}

export interface IMGetCourseByIdResponse {
  course: ICourseDetailMember;
}

export interface IMGetCertificateResponse {
  data: ICertificate;
}

export interface IMGetAllCertificatesResponse {
  certificates: ICertificate[];
}
