import React, { useEffect, useState } from "react";
import CardCourseMember, {
  CardCourseMemberSkeleton,
} from "../../../components/dashboard/CardCourseMember";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { usePage } from "../../../hooks/usePage";
import { useAppSelector } from "../../../redux/hooks";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
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

const List: React.FC = () => {
  const coursesState = useAppSelector((state) => state.courses);
  const [menuActive, setMenuActive] = useState<string>("ALL");
  const [showCourses, setShowCourses] = useState<ICourseItemMember[][]>([]);
  const { page, setTotal, setTotalWithReset, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 8,
  });

  useEffect(() => {
    const tmpCourses = sliceIntoChunks(coursesState.list, page.perPage);
    setShowCourses(tmpCourses);
    setTotal(tmpCourses.length);
  }, [coursesState.list]);

  useEffect(() => {
    if (menuActive !== "ALL") {
      const tmpResult = sliceIntoChunks(
        coursesState.list.filter(
          (course: ICourseItemMember) =>
            course.category === menuActive.toLowerCase()
        ),
        page.perPage
      );
      setTotalWithReset(tmpResult.length);
      return setShowCourses(tmpResult);
    }
    const tmpResult = sliceIntoChunks(coursesState.list, page.perPage);
    setTotalWithReset(tmpResult.length);
    return setShowCourses(tmpResult);
  }, [menuActive]);

  return (
    <Box>
      <Box>
        <Typography variant="h3">Kelasku</Typography>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          {!coursesState.loading &&
            showCourses[page.current - 1]?.slice(0, 4)?.map((course) => (
              <Grid key={course.id} item md={3}>
                <CardCourseMember course={course} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Typography variant="h3">Kelas Populer</Typography>
        <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
          {listMenu.map((menu) => (
            <Button
              key={menu.name}
              onClick={setMenuActive.bind(null, menu.name)}
              color={menuActive === menu.name ? "info" : "secondary"}
            >
              {menu.label}
            </Button>
          ))}
        </Stack>
        <Grid container spacing={5} sx={{ marginTop: "0px" }}>
          {coursesState.loading &&
            [1, 2, 3, 4].map((item) => (
              <Grid key={item} item md={3}>
                <CardCourseMemberSkeleton />
              </Grid>
            ))}

          {!coursesState.loading &&
            showCourses[page.current - 1]?.map((course) => (
              <Grid key={course.id} item md={3}>
                <CardCourseMember course={course} />
              </Grid>
            ))}
        </Grid>
        <Stack direction="row" justifyContent={"center"} marginTop="40px">
          <Pagination
            count={page.total}
            variant={"outlined"}
            onChange={changePage}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default List;
