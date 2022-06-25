import { PropsWithChildren } from "react";

export interface ICardCourse extends PropsWithChildren {
  id: number;
  thumbnail: string;
  level: string;
  title: string;
  description: string;
  price: string;
  target?: string;
}
