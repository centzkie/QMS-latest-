import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Notfound = () => {
  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "Column",
        }}
      >
        <Typography variant="h2">!404 Not found</Typography>
        <Box>
          <Button variant="contained" onClick={landing}>
            Go back
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Notfound;
