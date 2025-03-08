import * as yup from "yup";

export const createPostschema = yup.object({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  content: yup
    .string()
    .min(50, "Content must be at least 50 characters")
    .required("Content is required"),
});
