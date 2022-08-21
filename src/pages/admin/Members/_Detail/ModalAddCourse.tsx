import {
  Card,
  Paper,
  Fade,
  Modal,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { parseCategory } from "../../../../helpers/parseCategory";
import { ICourse, ICourseTiny } from "../../../../interfaces/course-model";
import { openSnackbar } from "../../../../redux/actions/snackbar";
import { useAppDispatch } from "../../../../redux/hooks";
import { getCoursesTiny } from "../../../../services/courses";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { toggleCourseMember } from "../../../../services/members";
import { useParams } from "react-router-dom";

interface IProps {
  show: boolean;
  onClose: () => void;
  memberCourses: ICourse[];
}
const ModalAddCourse: React.FC<IProps> = ({ show, onClose, memberCourses }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [courses, setCourses] = useState<ICourseTiny[]>([]);
  const [ownCoursesId, setOwnCoursesId] = useState<number[]>([]);
  const [loadingCourseId, setLoadingCourseId] = useState(0);

  const fetchCourses = async () => {
    try {
      const response = await getCoursesTiny();
      setCourses(response.data.courses);
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const result: number[] = [];
    memberCourses.forEach((course) => result.push(course.id));
    setOwnCoursesId(result);
  }, [memberCourses]);

  const addCourse = async (courseId: number) => {
    setLoadingCourseId(courseId);
    try {
      await toggleCourseMember({ id: parseInt(id!), courseId });
      setOwnCoursesId([...ownCoursesId, courseId]);
      dispatch(
        openSnackbar({
          severity: "success",
          message: "Added course to member successfully",
        })
      );
    } catch (error: any) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: error?.message,
        })
      );
    } finally {
      setLoadingCourseId(0);
    }
  };

  return ReactDOM.createPortal(
    <Modal open={show} onClose={onClose}>
      <Fade in={show}>
        <Card sx={{ outline: "none", padding: "30px" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tcell-head">#</TableCell>
                  <TableCell className="tcell-head">Kelas</TableCell>
                  <TableCell className="tcell-head">Level</TableCell>
                  <TableCell className="tcell-head">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course, i) => (
                  <TableRow key={course.id}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{parseCategory(course.category)}</TableCell>
                    <TableCell align="center">
                      {!ownCoursesId.includes(course.id) && (
                        <IconButton
                          color="info"
                          disabled={loadingCourseId === course.id}
                          onClick={addCourse.bind(null, course.id)}
                        >
                          <AddCircleRoundedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack justifyContent={"center"} sx={{ marginTop: "20px" }}>
            <Button color="secondary" onClick={onClose}>
              Tutup
            </Button>
          </Stack>
        </Card>
      </Fade>
    </Modal>,
    document.getElementById("modal-root") as Element
  );
};

export default ModalAddCourse;
