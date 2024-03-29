import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCourseMember, {
  CardCourseMemberSkeleton,
} from "../../../../components/dashboard/CardCourseMember";
import DataEmptySection from "../../../../components/dashboard/DataEmptySection";
import { sliceIntoChunks } from "../../../../helpers/chunk-array";
import { usePage } from "../../../../hooks/usePage";
import { ICourseItemMember } from "../../../../interfaces/course-model";
import { useAppSelector } from "../../../../redux/hooks";

const MyCoursesList: React.FC<{ title?: string }> = ({ title = "Kelasku" }) => {
  const coursesState = useAppSelector((state) => state.courses);
  const [showCourses, setShowCourses] = useState<ICourseItemMember[][]>([]);
  const { page, setTotal, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 4,
  });

  useEffect(() => {
    const tmpCourses = sliceIntoChunks(coursesState.owned_list, page.perPage);
    setShowCourses(tmpCourses);
    setTotal(tmpCourses.length);
  }, [coursesState.owned_list]);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ display: { xs: "none", md: "block" }, marginBottom: "40px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ display: { xs: "block", md: "none" } }}>
        {title}
      </Typography>
      <Grid container spacing={{ xs: 2, md: 5 }} sx={{ marginTop: "0px" }}>
        {coursesState.loading_owned &&
          [1, 2, 3, 4].map((item) => (
            <Grid key={item} item md={3}>
              <CardCourseMemberSkeleton />
            </Grid>
          ))}

        {!coursesState.loading_owned && !coursesState.owned_list.length && (
          <Grid item md={12}>
            <DataEmptySection />
          </Grid>
        )}

        {!coursesState.loading_owned &&
          showCourses[page.current - 1]?.slice(0, 4)?.map((course) => (
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
  );
};

export default MyCoursesList;
