import { Box, Typography, Grid, Stack, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardCart, {
  CardCartSkeleton,
} from "../../../components/dashboard/CardCart";
import { sliceIntoChunks } from "../../../helpers/chunk-array";
import { usePage } from "../../../hooks/usePage";
import { ICourseItemMember } from "../../../interfaces/course-model";
import { useAppSelector } from "../../../redux/hooks";

const WishlistSection: React.FC = () => {
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
    <Box sx={{ marginTop: "80px" }}>
      <Typography variant="h3">Ingin Dipelajari</Typography>
      <Grid container spacing={5} sx={{ marginTop: "0px" }}>
        <Grid item md={8}>
          {wishlist.loading && (
            <Stack direction="column" spacing={3}>
              <CardCartSkeleton />
              <CardCartSkeleton />
              <CardCartSkeleton />
            </Stack>
          )}

          <Stack direction={"column"} spacing={3}>
            {!wishlist.loading &&
              showWishlistItems[page.current - 1]?.map((course) => (
                <CardCart key={course.id} course={course} isCart={false} />
              ))}
          </Stack>
        </Grid>
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

export default WishlistSection;
