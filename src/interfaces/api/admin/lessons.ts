import { ILesson } from "../../lesson-model";

export interface IGetLessonsResponse {
  lessons: ILesson[];
}

export interface ICreateLessonResponse {
  lesson: ILesson;
  message: string;
}

export interface IDeleteLessonResponse {
  message: string;
}
