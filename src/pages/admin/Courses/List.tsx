import { Box, Button, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardCourse, { CardCourseSkeleton } from "../../../components/CardCourse";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { ICourse } from "../../../interfaces/course-model";
import { IPage } from "../../../interfaces/state/page";
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

  for (let i = 0; i <= 6; i++) {
    result.push(<CardCourseSkeleton />);
  }

  return <>{result}</>;
};

const List: React.FC = () => {
  const [menuActive, setMenuActive] = useState<string>("ALL");
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<IPage>({
    currentPage: 1,
    totalPage: 1,
    perPage: 6,
  });
  const [showCourses, setShowCourses] = useState<ICourse[][]>([]);
  const [allCourses, setAllCourses] = useState<ICourse[]>([]);

  const fetchAllCourses = async () => {
    try {
      const response = await getCourses();
      const courses = response.data.courses;
      setAllCourses(courses);
      const tmpCourses = sliceIntoChunks(courses, page.perPage);
      setShowCourses(tmpCourses);
      setPage({ ...page, totalPage: tmpCourses.length });
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    if (!showCourses[page.currentPage - 1]) {
      setPage({ ...page, currentPage: page.currentPage - 1 });
    }
  }, [showCourses]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage({ ...page, currentPage: value });
  };

  useEffect(() => {
    if (menuActive !== "ALL") {
      const tmpResult = sliceIntoChunks(
        allCourses.filter(
          (course) => course.category === menuActive.toLowerCase()
        ),
        page.perPage
      );
      setPage({ ...page, currentPage: 1, totalPage: tmpResult.length });
      return setShowCourses(tmpResult);
    }
    const tmpResult = sliceIntoChunks(allCourses, page.perPage);
    setPage({ ...page, currentPage: 1, totalPage: tmpResult.length });
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
          showCourses[page.currentPage - 1].map((course) => (
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
          count={page.totalPage}
          variant={"outlined"}
          onChange={handleChangePage}
        />
      </Stack>
    </Box>
  );
};

export default List;
