import * as React from "react";
import Theme from "../../CustomTheme";
import Logo from "../../Img/seal.png";
import {
  ThemeProvider,
  Typography,
  Toolbar,
  AppBar,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import PropTypes from "prop-types";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Appbar(props) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HideOnScroll {...props}>
          <AppBar
            color="pupMaroon"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}
          >
            <Toolbar>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.img
                  src={Logo}
                  alt=""
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15 }}
                  height="50px"
                  width="50px"
                />
                <Typography variant="h5">Queue Line Mangement</Typography>
              </Stack>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </ThemeProvider>
      {/* <ThemeProvider theme={Theme}>
        <Box>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar
              component="nav"
              color="pupMaroon"
              position="stick"
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
              }}
            >
              <Toolbar>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.img
                    src={Logo}
                    alt=""
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15 }}
                    height="50px"
                    width="50px"
                  />
                  <Typography variant="h5">Queue Line Mangement</Typography>
                </Stack>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        </Box>
        <Box
          sx={{ height: "5px", width: "100%", backgroundColor: "#ffd700" }}
        ></Box>
      </ThemeProvider> */}
    </>
  );
}

export default Appbar;
