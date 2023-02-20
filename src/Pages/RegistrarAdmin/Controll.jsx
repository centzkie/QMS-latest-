import {useEffect, React} from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Grid,
} from "@mui/material";
import Sidebar from "../../Components/Registrar/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";
import NowServing from "../../Components/Registrar/AdminNowServing";
import QueueLine from "../../Components/Registrar/AdminQueueLine";
import Skip from "../../Components/Registrar/AdminSkip";
import { useNavigate } from "react-router-dom";

const Controll = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if((localStorage.getItem("Password1") !== "admin") && (localStorage.getItem("Username1") !== "adminreg")){
      navigate("/admin");
    }
    console.log("Running");
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
