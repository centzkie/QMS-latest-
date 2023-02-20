import React from "react";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const EntertainementVid = () => {
  return (
    <div>
      {" "}
      <Box
        // my={{ lg: 8, md: 12 }}
        // mx={{ lg: 27, md: 10, sm: 5, xs: 4 }}
        m={5}
        py={{ lg: "24.7vh", md: 30, sm: 20, xs: 20 }}
        px={{ lg: "10px", md: 30, sm: 20, xs: 20 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          // paddingTop: "56.25%",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Wl22TkjLH44"
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          muted
          pip="true"
          style={{ position: "absolute", top: 0, left: 0 }}
          loop={true}
        />
      </Box>
    </div>
  );
};

export default EntertainementVid;
