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
import MyCoursesList from "./_List/MyCoursesList";
import Select from "../../../components/Select";

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
    const tmpCourses = sliceIntoChunks(
      coursesState.list.filter((course) => !course.is_owned),
      page.perPage
    );
    setShowCourses(tmpCourses);
    setTotal(tmpCourses.length);
  }, [coursesState.list]);

  useEffect(() => {
    if (menuActive !== "ALL") {
      const tmpResult = sliceIntoChunks(
        coursesState.list.filter(
          (course: ICourseItemMember) =>
            course.category === menuActive.toLowerCase() && !course.is_owned
        ),
        page.perPage
      );
      setTotalWithReset(tmpResult.length);
      return setShowCourses(tmpResult);
    }
    const tmpResult = sliceIntoChunks(
      coursesState.list.filter((course) => !course.is_owned),
      page.perPage
    );
    setTotalWithReset(tmpResult.length);
    return setShowCourses(tmpResult);
  }, [menuActive]);

  return (
    <Box>
      <MyCoursesList />
      <Box sx={{ marginTop: "80px" }}>
        {/* ========== Mobile View ============== */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Typography variant="h5">Kelas Populer</Typography>
          <Box sx={{ margin: "15px auto", width: "100%" }}>
            <Typography variant="body1" sx={{ marginBottom: "5px" }}>
              Kategori
            </Typography>
            <Box sx={{ width: "70%" }}>
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
        </Box>

        {/* ========== Laptop View ============== */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="h3">Kelas Populer</Typography>
          <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
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
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          sx={{ marginTop: { xs: "20px", md: "0px" } }}
        >
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
