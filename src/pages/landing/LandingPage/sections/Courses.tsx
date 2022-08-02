import {
  Box,
  Button,
  Card,
  Divider,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { palette } from "../../../../styles/theme/palette";
import SectionLayout from "../components/SectionLayout";
import TitleSection from "../components/TitleSection";
import StarIcon from "../../../../assets/icons/star.svg";
import { ICourse } from "../../../../interfaces/course-model";
import { useAppDispatch } from "../../../../redux/hooks";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { landingGetCourses } from "../../../../services/landing";
import { COURSE_LEVEL } from "../../../../types/course_level";
import { usePage } from "../../../../hooks/usePage";
import { sliceIntoChunks } from "../../../../helpers/chunk-array";
import { parseCategory } from "../../../../helpers/parseCategory";
import { formatRp } from "../../../../helpers/formatRp";
import { Link } from "react-router-dom";

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

const dataCourses = [
  {
    id: 1,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Pemula",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis nulla doloribus sunt!",
    price: "Rp1.000.000",
  },
  {
    id: 2,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Menenganh",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores natus autem odio?",
    price: "Rp1.500.000",
  },
  {
    id: 3,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp1.200.000",
  },
  {
    id: 4,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp1.400.000",
  },
  {
    id: 5,
    thumbnail:
      "https://eclass.syariahsaham.id/storage/thumbnails/A8YjwC4JoPeDgzgIlku9rC6HzrQyaQvzVG0VSB5y9evg6beAWT.jpg",
    level: "Professional",
    title: "Prinsip Syariah di Pasar Modal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sed beatae a nemo illo.",
    price: "Rp2.200.000",
  },
];

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
const Courses: React.FC = () => {
  const [menuActive, setMenuActive] = useState<string>("ALL");
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [showCourses, setShowCourses] = useState<ICourse[][]>([]);
  const { page, setTotal, setTotalWithReset, changePage } = usePage({
    current: 1,
    total: 1,
    perPage: 6,
  });

  const fetchCourses = async () => {
    try {
      const response = await landingGetCourses();
      setCourses(response.data.courses);
      const tmpCourses = sliceIntoChunks(response.data.courses, page.perPage);
      setShowCourses(tmpCourses);
      setTotal(tmpCourses.length);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (menuActive !== "ALL") {
      const tmpResult = sliceIntoChunks(
        courses.filter(
          (course: ICourse) => course.category === menuActive.toLowerCase()
        ),
        page.perPage
      );
      setTotalWithReset(tmpResult.length);
      return setShowCourses(tmpResult);
    }
    const tmpResult = sliceIntoChunks(courses, page.perPage);
    setTotalWithReset(tmpResult.length);
    return setShowCourses(tmpResult);
  }, [menuActive]);

  return (
    <SectionLayout>
      <Box id="courses">
        <Typography variant="h5">Daftar Kelas</Typography>
        <TitleSection title="Pilih Kelas Untuk Memulai" />
      </Box>
      <Stack
        sx={{ display: { xs: "none", md: "flex" } }}
        direction={"row"}
        gap={2}
      >
        {listMenu.map((menu) => (
          <Button
            key={menu.value}
            variant={menuActive === menu.value ? "contained" : "text"}
            color="secondary"
            onClick={setMenuActive.bind(null, menu.value)}
          >
            {menu.label}
          </Button>
        ))}
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ margin: "50px auto" }}
        gap={5}
        flexWrap="wrap"
      >
        {showCourses[page.current - 1]?.map((course) => (
          <Card
            key={course.id}
            sx={{
              width: { xs: "95%", md: "30%" },
              boxSizing: "border-box",
              margin: { xs: "10px auto", md: "auto" },
              padding: "0",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                background: theme.palette.background.paper,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={`${import.meta.env.VITE_STORAGE_URL}/${course.thumbnail}`}
                alt="thumbnail"
              />
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
                    color: palette.primary.main,
                    textTransform: "uppercase",
                    fontWeight: "medium",
                    marginBottom: 2,
                  }}
                >
                  {parseCategory(course.category)}
                </Typography>
              </Stack>
              <Box>
                <Typography variant="h5">{course.title}</Typography>
                <Typography>{course.short_description}</Typography>
              </Box>
              <Divider sx={{ margin: "20px auto" }} />
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={"space-between"}
                alignItems="center"
                spacing={2}
              >
                <Typography
                  fontWeight={"medium"}
                  sx={{ color: `${palette.warning.main} !important` }}
                >
                  {formatRp(course.price)}
                </Typography>
                <Link to={`/member/courses/${course.id}`}>
                  <Button>Beli Sekarang</Button>
                </Link>
              </Stack>
            </Box>
          </Card>
        ))}
      </Stack>
      <Stack direction="row" justifyContent={"center"} marginTop="40px">
        <Pagination
          count={page.total}
          variant={"outlined"}
          onChange={changePage}
        />
      </Stack>
    </SectionLayout>
  );
};

export default Courses;
