import { IResources } from "./resources";

export interface ILesson extends IResources {
  id: number;
  course_id: number;
  order: number;
  title: string;
  description: string;
  video_id: string;
  is_done?: number | null | boolean;
}
