import {
  Box,
  Card,
  Stack,
  Typography,
  useTheme,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../assets/icons/star.svg";
import { ICardCourse } from "../interfaces/components/card-course";
import { useAppSelector } from "../redux/hooks";

const Rating: React.FC = () => {
  return (
    <Stack direction="row" justifyContent={"center"} alignItems="center">
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
      <img src={StarIcon} alt="star icon" style={{ height: "20px" }} />
    </Stack>
  );
};

const CardCourse: React.FC<ICardCourse> = (course) => {
  const theme = useTheme();
  const auth = useAppSelector((state) => state.auth);

  return (
    <Card
      key={course.id}
      sx={{
        width: "30%",
        boxSizing: "border-box",
        padding: "0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "100%" }} src={course.thumbnail} alt="thumbnail" />
      </Box>
      <Box sx={{ padding: "30px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Rating />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              textTransform: "uppercase",
              fontWeight: "medium",
              marginBottom: 2,
            }}
          >
            {course.level}
          </Typography>
        </Stack>
        <Box>
          <Typography variant="h5">{course.title}</Typography>
          <Typography>{course.description}</Typography>
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
            {course.price}
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
