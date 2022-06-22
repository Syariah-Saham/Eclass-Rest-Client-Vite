import * as Yup from "yup";

export const createMentorValidation = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("This field is required"),
  password: Yup.string().min(5).max(30).required("This field is required"),
  password_confirmation: Yup.string()
    .min(5)
    .max(30)
    .required("This field is required"),
});
