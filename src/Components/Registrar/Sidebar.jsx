import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ThemeProvider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Link,
  Paper,
  createTheme,
  
} from "@mui/material";
import {
  Dashboard,
  Campaign,
  ScreenShareOutlined,
  InsertChartOutlinedOutlined,
  Logout,
  Menu,
  Archive,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Theme from "../../CustomTheme";
import logo from "../../Img/seal.png";

const sidelogo = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#000000",
          padding: "15px",
        },
      },
    },
  },
});


const Sidebar = () => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const registrarcontroll = () => {
    navigate("/reg-controll");
  };

  const registrarAnnouncement = () => {
    navigate("/reg-announcement");
  };

  const registrarReport = () => {
    navigate("/reg-report");
  };
  const registrarLogout = () => {
    localStorage.removeItem("Username1");
    localStorage.removeItem("Password1");
    navigate("/admin");
  };

  const regArchive = () => {
    navigate("/reg-archive");
  };
  
  
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setShow(true)}
        sx={{ color: "white" }}
      >
        <Menu />
      </IconButton>
      <ThemeProvider theme={Theme}>
        <Drawer
          anchor="left"
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <Box width="350px" textAlign="center" role="presentation">
            <Box p={3}>
              <ThemeProvider theme={sidelogo}>
                <Box component={Paper} elevation={4}>
                  <Typography
                    my={3}
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Registrar office
                  </Typography>
                  <img src={logo} alt="" height={100} />
                  <Typography>PUPSMB-QMS</Typography>
                </Box>
              </ThemeProvider>
            </Box>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={registrarcontroll}>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Dashboard
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={registrarAnnouncement}>
                  <ListItemIcon>
                    <Campaign />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Announcement
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ScreenShareOutlined />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        <Link
                          href="http://localhost:3000/reg-monitor"
                          target="_blank"
                          rel="noreferrer"
                          underline="none"
                          color="inherit"
                        >
                          Share to Monitor
                        </Link>
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={registrarReport}>
                  <ListItemIcon>
                    <InsertChartOutlinedOutlined />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Summary Report
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={regArchive}>
                  <ListItemIcon>
                    <Archive />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Archive
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={registrarLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Sign Out
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Sidebar;
