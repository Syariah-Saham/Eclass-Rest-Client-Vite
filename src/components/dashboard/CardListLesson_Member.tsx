import { Box, Typography, Card, Stack, useTheme, Button } from "@mui/material";
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import { useNavigate } from "react-router-dom";

interface ICardListLesson_Member {
  canContinue?: boolean;
}
const CardListLesson_Member: React.FC<ICardListLesson_Member> = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "17px" }}>
        Materi yang Dipelajari
      </Typography>
      <Card>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              1
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              2
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              3
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: theme.palette.background.default,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              4
            </Box>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, lorem ipsum dol. Lorem ipsum dolor sit
              amet.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginTop: "15px" }}
        >
          {props.canContinue ? (
            <>
              <Button
                sx={{ width: "47%" }}
                startIcon={<PlayCircleFilledWhiteRoundedIcon />}
                size="large"
                color="secondary"
                onClick={() => navigate(`/member/courses/1/lesson/1`)}
              >
                Lanjut Belajar
              </Button>
              <Button
                sx={{ width: "47%" }}
                startIcon={<ReadMoreIcon />}
                size="large"
              >
                Lihat Selengkapnya
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{ width: "100%" }}
                startIcon={<ReadMoreIcon />}
                size="large"
              >
                Lihat Selengkapnya
              </Button>
            </>
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default CardListLesson_Member;
