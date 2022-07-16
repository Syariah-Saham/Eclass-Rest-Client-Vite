import { COURSE_LEVEL } from "../types/course_level";

export const parseCategory = (category: COURSE_LEVEL) => {
  if (category.toUpperCase() === COURSE_LEVEL.BEGINNER) return "pemula";
  if (category.toUpperCase() === COURSE_LEVEL.INTERMEDIETE) return "menengah";
  if (category.toUpperCase() === COURSE_LEVEL.EXPERT) return "professional";
};
