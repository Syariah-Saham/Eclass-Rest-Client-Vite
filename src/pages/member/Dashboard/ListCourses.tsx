import {
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCourseMember from "../../../components/dashboard/CardCourseMember";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { useAppSelector } from "../../../redux/hooks";
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

const ListCourses: React.FC = () => {
  const theme = useTheme();
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
    <Box sx={{ marginTop: "60px" }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Learn With{" "}
        <b style={{ color: theme.palette.secondary.light }}>Expert</b>
      </Typography>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Anytime & Anywhere
      </Typography>
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing={3}
        sx={{ marginTop: "25px" }}
      >
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

      <Box>
        {coursesState.loading ? (
          <p>Loading ...</p>
        ) : (
          <Grid container spacing={5} sx={{ marginTop: "20px" }}>
            {showCourses[page.current - 1]?.map((course) => (
              <Grid key={course.id} item md={3}>
                <CardCourseMember course={course} />
              </Grid>
            ))}
          </Grid>
        )}
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

export default ListCourses;
