import { Box, Button, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardCourse, { CardCourseSkeleton } from "../../../components/CardCourse";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourse } from "../../../interfaces/course-model";
import { openSnackbar } from "../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../redux/hooks";
import { getCourses } from "../../../services/courses";
import { COURSE_LEVEL } from "../../../types/course_level";

const listMenu = [
  {
    label: "Semua",
    name: "ALL",
  },
  {
    label: "Pemula",
    name: COURSE_LEVEL.BEGINNER,
  },
  {
    label: "Menengah",
    name: COURSE_LEVEL.INTERMEDIETE,
  },
  {
    label: "Professional",
    name: COURSE_LEVEL.EXPERT,
  },
];

const CourseListSkeleton = () => {
  const result = [];

  for (let i = 1; i <= 6; i++) {
    result.push(<CardCourseSkeleton key={i} />);
  }

  return <>{result}</>;
};

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const [menuActive, setMenuActive] = useState<string>("ALL");
  const [loading, setLoading] = useState<boolean>(true);
  const { page, setTotal, backPage, setTotalWithReset, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 6,
  });
  const [showCourses, setShowCourses] = useState<ICourse[][]>([]);
  const [allCourses, setAllCourses] = useState<ICourse[]>([]);

  const fetchAllCourses = async () => {
    try {
      const response = await getCourses();
      const courses = response.data.courses;
      const tmpCourses = sliceIntoChunks(courses, page.perPage);
      setAllCourses(courses);
      setShowCourses(tmpCourses);
      setTotal(tmpCourses.length);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    if (!showCourses[page.current - 1]) {
      backPage();
    }
  }, [showCourses]);

  useEffect(() => {
    if (menuActive !== "ALL") {
      const tmpResult = sliceIntoChunks(
        allCourses.filter(
          (course) => course.category === menuActive.toLowerCase()
        ),
        page.perPage
      );
      setTotalWithReset(tmpResult.length);
      return setShowCourses(tmpResult);
    }
    const tmpResult = sliceIntoChunks(allCourses, page.perPage);
    setTotalWithReset(tmpResult.length);
    return setShowCourses(tmpResult);
  }, [menuActive]);

  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ marginBottom: "20px" }}>
        <Link to="/admin/courses/create">
          <Button>Tambah Kelas</Button>
        </Link>
        {listMenu.map((menu) => (
          <Button
            key={menu.name}
            variant={menuActive === menu.name ? "outlined" : "text"}
            color="secondary"
            onClick={setMenuActive.bind(null, menu.name)}
          >
            {menu.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" gap={5} flexWrap="wrap">
        {loading ? (
          <CourseListSkeleton />
        ) : (
          showCourses[page.current - 1]?.map((course) => (
            <CardCourse
              key={course.id}
              target={`/admin/courses/${course.id}`}
              {...course}
            />
          ))
        )}
      </Stack>
      <Stack direction="row" justifyContent={"center"} marginTop="40px">
        <Pagination
          count={page.total}
          variant={"outlined"}
          onChange={changePage}
        />
      </Stack>
    </Box>
  );
};

export default List;
