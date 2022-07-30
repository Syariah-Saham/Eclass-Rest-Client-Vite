import * as Yup from "yup";

export const createLessonValidation = Yup.object({
  title: Yup.string().required("This field is required").min(5).max(50),
  video_id: Yup.string().required("This field is required").min(3).max(50),
  description: Yup.string().required("This field is required").min(5),
});

export const updateLessonValidation = Yup.object({
  title: Yup.string().required("This field is required").min(5).max(50),
  video_id: Yup.string().required("This field is required").min(3).max(50),
});
