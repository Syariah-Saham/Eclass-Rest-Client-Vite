import { Box, Typography, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCourseMember, {
  CardCourseMemberSkeleton,
} from "../../../components/dashboard/CardCourseMember";
import DataEmptySection from "../../../components/dashboard/DataEmptySection";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { useAppSelector } from "../../../redux/hooks";

const WishList: React.FC = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const [showWishlistItems, setShowWishlistItems] = useState<
    ICourseItemMember[][]
  >([]);
  const { page, setTotal, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 6,
  });

  useEffect(() => {
    const tmpItems = sliceIntoChunks(wishlist.list, page.perPage);
    setTotal(tmpItems.length);
    setShowWishlistItems(tmpItems);
  }, [wishlist.list]);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ display: { xs: "none", md: "block" }, marginBottom: "40px" }}
      >
        Ingin Dipelajari
      </Typography>
      <Typography variant="h5" sx={{ display: { xs: "block", md: "none" } }}>
        Ingin Dipelajari
      </Typography>
      <Grid container spacing={{ xs: 2, md: 5 }} sx={{ marginTop: "0px" }}>
        {wishlist.loading &&
          [1, 2, 3, 4].map((item) => (
            <Grid item key={item} md={3}>
              <CardCourseMemberSkeleton />
            </Grid>
          ))}

        {!wishlist.loading &&
          showWishlistItems[page.current - 1]?.map((course) => (
            <Grid key={course.id} item md={3}>
              <CardCourseMember course={course} />
            </Grid>
          ))}

        {!wishlist.loading && !wishlist.list.length && (
          <Grid item xs={12}>
            <DataEmptySection />
          </Grid>
        )}
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

export default WishList;
