import { COURSE_LEVEL } from "../../../types/course_level";

export interface ICreateCourseForm {
  title: string;
  price: number;
  category: COURSE_LEVEL;
  user_id: number;
  thumbnail: object;
  description: string;
  short_description: string;
}
