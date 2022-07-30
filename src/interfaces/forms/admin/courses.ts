import { COURSE_LEVEL } from "../../../types/course_level";

export interface ICreateCourseForm {
  title: string;
  price: number;
  actual_price: number;
  category: COURSE_LEVEL;
  user_id: number;
  thumbnail: object;
  description: string;
  short_description: string;
}

export interface IUpdateDescriptionForm {
  description: string;
}
