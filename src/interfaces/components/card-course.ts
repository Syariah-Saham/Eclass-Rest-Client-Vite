import { PropsWithChildren } from "react";
import { ICourse } from "../course-model";

export interface ICardCourse extends PropsWithChildren, ICourse {
  target?: string;
}
