import { useEffect } from "react";
import { storeCourses, storeMyCourses } from "../redux/actions/courses";
import { openSnackbar } from "../redux/actions/snackbar";
import { useAppDispatch } from "../redux/hooks";
import { getCourses, getMyCourses } from "../services/member/courses";
import { ACTION_COURSES } from "../types/courses";

export const useStoreCourses = () => {
  const dispatch = useAppDispatch();
  const fetchAllCourses = async () => {
    try {
      const courses = await getCourses();
      dispatch(storeCourses(courses.data.courses));
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_COURSES.STOP_LOADING,
      });
    }
  };

  const fetchMyCourses = async () => {
    try {
      const myCourses = await getMyCourses();
      dispatch(
        storeMyCourses(myCourses.data.courses, myCourses.data.last_learning)
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
      dispatch({
        type: ACTION_COURSES.STOP_LOADING_OWNED,
      });
    }
  };

  useEffect(() => {
    fetchAllCourses();
    fetchMyCourses();
  }, []);
};
