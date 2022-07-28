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
import CardCourseMember, {
  CardCourseMemberSkeleton,
} from "../../../components/dashboard/CardCourseMember";
import Select from "../../../components/Select";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { useAppSelector } from "../../../redux/hooks";
import { COURSE_LEVEL } from "../../../types/course_level";

const listMenu = [
  {
    label: "Semua",
    value: "ALL",
  },
  {
    label: "Pemula",
    value: COURSE_LEVEL.BEGINNER,
  },
  {
    label: "Menengah",
    value: COURSE_LEVEL.INTERMEDIETE,
  },
  {
    label: "Professional",
    value: COURSE_LEVEL.EXPERT,
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
    <Box sx={{ marginTop: { md: "60px" } }}>
      {/* ============ Mobile View ============ */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ textAlign: "center", display: { xs: "block", md: "none" } }}>
          <Typography variant="h4">
            Learn With{" "}
            <b style={{ color: theme.palette.secondary.light }}>Expert</b>
          </Typography>
          <Typography variant="h4">Anytime & Anywhere</Typography>
        </Box>

        <Box sx={{ margin: "15px auto", width: "60%" }}>
          <Typography
            variant="body1"
            textAlign={"center"}
            sx={{ marginBottom: "5px" }}
          >
            Kategori
          </Typography>
          <Select
            placeholder="Pilih Kategori"
            options={listMenu}
            value={listMenu.find((menu) => menu.value === menuActive)}
            onChange={(item) => {
              let newItem = item as { value: COURSE_LEVEL };
              setMenuActive(newItem.value);
            }}
          />
        </Box>
      </Box>

      {/* ================ Laptop View ============== */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant={"h2"} sx={{ textAlign: "center" }}>
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
              key={menu.value}
              onClick={setMenuActive.bind(null, menu.value)}
              color={menuActive === menu.value ? "info" : "secondary"}
            >
              {menu.label}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        {coursesState.loading ? (
          <Grid container spacing={{ xs: 2, md: 5 }}>
            {[1, 2, 3, 4].map((item) => (
              <Grid key={item} item md={3}>
                <CardCourseMemberSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={{ xs: 2, md: 5 }}>
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
