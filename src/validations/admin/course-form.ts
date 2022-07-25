import * as Yup from "yup";

export const createCourseValidation = Yup.object({
  title: Yup.string().required("This field is required").min(5).max(50),
  price: Yup.number().required("This field is required").min(0),
  actual_price: Yup.number().required("This field is required").min(0),
  category: Yup.string().required("This field is required"),
  user_id: Yup.number().required("This field is required"),
  description: Yup.string().required("This field is required").min(5),
  short_description: Yup.string()
    .required("This field is required")
    .min(5)
    .max(200),
});
