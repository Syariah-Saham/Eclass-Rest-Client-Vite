import { BOOL } from "../types/bool";
import { COURSE_LEVEL } from "../types/course_level";
import { ILesson } from "./lesson-model";
import { IResources } from "./resources";
import { IUser } from "./user-model";

export interface ICourse extends IResources {
  id: number;
  user_id: number;
  category: COURSE_LEVEL;
  thumbnail: string;
  title: string;
  description: string;
  short_description: string;
  price: number;
  rating: number;
  is_publish: BOOL;
}

export interface ICourseDetail extends ICourse {
  mentor: IUser;
  lessons: ILesson[];
}

export interface ICourseItemMember extends ICourse {
  total_lessons: number;
  is_wishlist: boolean;
  is_cart: boolean;
  is_owned: boolean;
}

export interface ICourseDetailMember extends ICourseItemMember {
  lessons: ILesson[];
  mentor: IUser;
}
