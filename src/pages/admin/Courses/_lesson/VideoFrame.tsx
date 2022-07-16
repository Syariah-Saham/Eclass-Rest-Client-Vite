import { Box } from "@mui/material";
import React from "react";
import IFrame from "react-iframe";
import { ILesson } from "../../../../interfaces/lesson-model";

interface IVideoFrameProps {
  lesson: ILesson;
}
const VideoFrame: React.FC<IVideoFrameProps> = (props) => {
  return (
    <Box sx={{ borderRadius: "22px", overflow: "hidden" }}>
      <IFrame
        url={`https://www.youtube.com/embed/${props.lesson.video_id}`}
        width={"100%"}
        height="700"
        position="relative"
        frameBorder={0}
      />
    </Box>
  );
};

export default VideoFrame;
