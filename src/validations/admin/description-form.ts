import * as Yup from "yup";

export const updateDescriptionForm = Yup.object({
  description: Yup.string().required("This field is required").min(5),
});
