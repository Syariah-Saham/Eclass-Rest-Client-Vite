import { BOOL } from "../types/bool";
import { COURSE_LEVEL } from "../types/course_level";
import { IResources } from "./resources";
import { IUser } from "./user-model";

export interface ICourse extends IResources {
  id: number;
  user_id: number;
  category: COURSE_LEVEL;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  is_publish: BOOL;
}

export interface ICourseWithMentor extends ICourse {
  mentor: IUser;
}
