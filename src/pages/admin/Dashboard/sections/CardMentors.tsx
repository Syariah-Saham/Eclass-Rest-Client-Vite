import {
  Avatar,
  Box,
  Button,
  Card,
  Fade,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../../../interfaces/user-model";
import { getSomeMentors } from "../../../../services/mentors";

const ListSkeleton: React.FC = () => {
  const list = [1, 2, 3];
  return (
    <>
      {list.map((item) => (
        <Stack
          direction="row"
          alignItems={"center"}
          gap={3}
          key={item}
          sx={{ margin: "23.5px 0px" }}
        >
          <Skeleton variant="circular" height={50} width={50} />
          <Box sx={{ width: "70%", marginLeft: "5px" }}>
            <Skeleton
              variant="text"
              sx={{ width: "50%", marginBottom: "10px", height: "25px" }}
            />
            <Skeleton variant="text" sx={{ width: "90%", height: "16px" }} />
          </Box>
        </Stack>
      ))}
    </>
  );
};

const CardMentors: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const [mentors, setMentors] = useState<IUser[]>([]);

  const getMentors = async () => {
    try {
      const response = await getSomeMentors({ item: 3 });
      setMentors(response.data.mentors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ height: "450px" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Daftar Mentor
        </Typography>
        <Stack direction="column" gap={2}>
          {loading ? (
            <ListSkeleton />
          ) : (
            mentors.map((mentor) => (
              <Fade in={!loading} timeout={400}>
                <Stack
                  key={mentor.id}
                  direction="row"
                  alignItems={"center"}
                  gap={3}
                  sx={{ margin: "20px 0px" }}
                >
                  <Box>
                    <Avatar
                      alt="User 1"
                      src={`${import.meta.env.VITE_STORAGE_URL}/${
                        mentor.profile_photo
                      }`}
                      sx={{ height: "50px", width: "50px" }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h5">{mentor.name}</Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.disabled}
                    >
                      {mentor.email}
                    </Typography>
                  </Box>
                </Stack>
              </Fade>
            ))
          )}
        </Stack>
        <Link to="/admin/mentors">
          <Button sx={{ width: "100%", marginTop: "20px" }} color="primary">
            Lihat Semua
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default CardMentors;
