import { ILesson } from "../../lesson-model";

export interface IMGetLessonsByCourseIdResponse {
  lessons: ILesson[];
}

export interface IMGetLessonByIdResponse {
  lesson: ILesson;
}
