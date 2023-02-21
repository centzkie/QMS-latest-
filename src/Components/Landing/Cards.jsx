import React, { useEffect, useState } from "react";
import Logo from "../../Img/seal.png";
import {
  ThemeProvider,
  Box,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  Button,
  CardContent,
  Card,
} from "@mui/material";
import { AddToQueue, PersonSearch } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import moment from "moment-timezone";
import Theme from "../../CustomTheme";

const Cards = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const timezone = "Asia/Manila";

  // to disable time in specific time only
  useEffect(() => {
    const checkTime = () => {
      let currentTime = moment().tz(timezone);
      let startTime = moment.tz("08:00", "HH:mm a", timezone);
      let endTime = moment.tz("20:00", "HH:mm a", timezone);

      if (currentTime.isBetween(startTime, endTime)) {
        setIsDisabled(false);
        sessionStorage.setItem("Auth", true);
      } else {
        setIsDisabled(true);
        sessionStorage.setItem("Auth", false);
      }
    };
    const intervalId = setInterval(checkTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // navigations
  const navigate = useNavigate();
  const generateAcad = () => {
    navigate("/generateform-acad");
  };
  const generateReg = () => {
    navigate("/generateform-reg");
  };
  const transactionReg = () => {
    navigate("/transaction-reg");
  };
  const transactionAcad = () => {
    navigate("/transaction-acad");
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box p={4}>
          <Grid
            container
            spacing={{ lg: 8, md: 4, sm: 2, xs: 2 }}
            justifyContent="center"
          >
            <Grid item>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Logo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Academic Head Office
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Academic Head Office is a type of office for academic
                    related transactions, such as Change section, Overload,
                    Adding subjects. Assesed by Dr. khaye Castro. Office Hours
                    8:00 AM - 5:00PM
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="pupMaroon"
                    variant="contained"
                    endIcon={<AddToQueue />}
                    onClick={generateAcad}
                    disabled={isDisabled}
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Get Inline
                  </Button>
                  <Button
                    size="small"
                    color="pupMaroon"
                    variant="outlined"
                    onClick={transactionAcad}
                    endIcon={<PersonSearch />}
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Transaction
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Logo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Registrar Office
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Registrar Office is a type of office for Non academic
                    related transactions, such as Diploma, Payments, ID Etc..
                    Assesed by Mr Gregorio Reyes. Office Hours 8:00 AM - 5:00PM
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="pupMaroon"
                    variant="contained"
                    onClick={generateReg}
                    disabled={isDisabled}
                    endIcon={<AddToQueue />}
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Get Inline
                  </Button>
                  <Button
                    size="small"
                    color="pupMaroon"
                    variant="outlined"
                    onClick={transactionReg}
                    endIcon={<PersonSearch />}
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Transaction
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Cards;