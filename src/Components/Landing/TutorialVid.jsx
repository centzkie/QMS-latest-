import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
const TutorialVid = () => {
  return (
    <>
      <Box
        my={{ lg: 8, md: 12 }}
        mx={{ lg: 27, md: 10, sm: 5, xs: 4 }}
        py={{ lg: 40, md: 30, sm: 20, xs: 20 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          // paddingTop: "56.25%",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hsGOT_0L16U"
          width="100%"
          height="100%"
          controls={true}
          pip="true"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </Box>
    </>
  );
};

export default TutorialVid;
