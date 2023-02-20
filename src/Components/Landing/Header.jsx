import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box pt={5} px={{ lg: 30, md: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Welcome to PUPSMB-QMS
      </Typography>

      <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
        Academic head office & Registrar
      </Typography>
    </Box>
  );
};

export default Header;
