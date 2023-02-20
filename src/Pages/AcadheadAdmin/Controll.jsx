import { React, useEffect } from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Grid,
} from "@mui/material";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";
import QueueLine from "../../Components/Acadhead/AdminQueueline";
import NowServing from "../../Components/Acadhead/AdminNowServing";
import Skip from "../../Components/Acadhead/AdminSkip";
import { useNavigate } from "react-router-dom";

const Controll = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if((localStorage.getItem("Password") !== "admin") && (localStorage.getItem("Username") !== "adminacad")){
      navigate("/admin");
    }
  })

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="pupMaroon">
            <Toolbar>
              <Sidebar />
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

      {/* Control Table */}
      <Box p={5}>
        <Grid container spacing={5}>
          {/* Now Serving */}
          <Grid item lg={12}>
            <NowServing />
          </Grid>

          {/* Queue Line */}
          <Grid item lg={12}>
            <QueueLine />
          </Grid>

          {/* Skip */}
          <Grid item lg={12}>
            <Skip />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Controll;
