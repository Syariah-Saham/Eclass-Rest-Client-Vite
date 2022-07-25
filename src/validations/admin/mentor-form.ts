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
  occupation: Yup.string().min(3).max(40).required("This field is required"),
  short_profile: Yup.string()
    .min(5)
    .max(250)
    .required("This field is required"),
});
