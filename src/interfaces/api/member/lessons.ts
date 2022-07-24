import { ILesson } from "../../lesson-model";

export interface IMGetLessonsByCourseIdResponse {
  lessons: ILesson[];
}

export interface IMGetLessonByIdResponse {
  lesson: ILesson;
}

export interface IMToggleStatusLessonResponse {
  certificate_id?: string;
  status: boolean;
  message: string;
}
