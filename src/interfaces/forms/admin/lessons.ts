export interface ICreateLessonForm {
  course_id: string;
  title: string;
  video_id: string;
  description: string;
}

export interface IUpdateLessonForm {
  title: string;
  video_id: string;
}
