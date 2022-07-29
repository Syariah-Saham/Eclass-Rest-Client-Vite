import {
  Box,
  Card,
  Stack,
  Typography,
  useTheme,
  Divider,
  Button,
  Skeleton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../assets/icons/star.svg";
import { formatRp } from "../helpers/formatRp";
import { parseCategory } from "../helpers/parseCategory";
import { ICardCourse } from "../interfaces/components/card-course";
import { useAppSelector } from "../redux/hooks";
import Rating from "./dashboard/Rating";

const styles = {
  rating: {
    fontWeight: "bold",
    marginBottom: 2,
    padding: "10px 20px",
    borderRadius: "15px",
  },
  card: {
    width: "30%",
    boxSizing: "border-box",
    padding: "0",
  },
  thumbnail: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  thumbnailStack: { position: "absolute", top: 15, left: 25, right: 25 },
  category: {
    textTransform: "uppercase",
    fontWeight: "medium",
    marginBottom: 2,
    padding: "10px 20px",
    borderRadius: "15px",
  },
};

export const CardCourseSkeleton: React.FC = () => {
  return (
    <Card sx={styles.card}>
      <Skeleton variant="rectangular" width={"100%"} height={"252px"} />
      <Box sx={{ padding: "30px" }}>
        <Box>
          <Skeleton variant="text" sx={{ width: "80%", height: "24px" }} />
        </Box>
        <Divider sx={{ margin: "20px auto" }} />
        {
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Skeleton variant="text" width="30%" height="22px" />
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "12px" }}
              width={"40%"}
              height="36px"
            />
          </Stack>
        }
      </Box>
    </Card>
  );
};

const CardCourse: React.FC<ICardCourse> = (course) => {
  const theme = useTheme();
  const auth = useAppSelector((state) => state.auth);

  return (
    <Card key={course.id} sx={styles.card}>
      <Box sx={styles.thumbnail}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={styles.thumbnailStack}
        >
          <Rating star={course.rating} />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.background.paper,
              ...styles.category,
            }}
          >
            {parseCategory(course.category)}
          </Typography>
        </Stack>
        <img
          style={{ width: "100%" }}
          src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
          alt="thumbnail"
        />
      </Box>
      <Box sx={{ padding: "30px" }}>
        <Box>
          <Typography variant="h5">{course.title}</Typography>
          <Typography variant="body1">{course.short_description}</Typography>
        </Box>
        <Divider sx={{ margin: "20px auto" }} />
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography
            fontWeight={"medium"}
            sx={{ color: `${theme.palette.warning.main} !important` }}
          >
            {formatRp(course.price)}
          </Typography>
          <Link to={course.target ? course.target : "#"}>
            <Button>
              {auth.role === "member" ? "Beli Sekarang" : "Lihat"}
            </Button>
          </Link>
        </Stack>
      </Box>
    </Card>
  );
};

export default CardCourse;
