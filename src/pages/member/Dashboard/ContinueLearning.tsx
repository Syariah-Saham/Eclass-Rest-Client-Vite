import { Typography, Card, Box, Stack, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const ContinueLearning: React.FC = () => {
  const course = useAppSelector((state) => state.courses.last_learning);

  if (course) {
    return (
      <>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ marginBottom: "10px" }}
        >
          Lanjut Belajar
        </Typography>
        <Card sx={{ width: "85%" }}>
          <Stack direction="row" spacing={3}>
            <Box
              sx={{
                width: "35%",
                borderRadius: "15px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
                alt="thumbnail"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "90%" }}>
                <Typography variant="h5">{course.title}</Typography>
              </Box>
              <Stack direction="row" justifyContent={"flex-end"}>
                <Link to={`/member/courses/${course.id}/corridor`}>
                  <Button color="secondary">Lanjut</Button>
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </>
    );
  } else {
    return <></>;
  }
};

export default ContinueLearning;
