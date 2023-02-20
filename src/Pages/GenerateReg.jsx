import { Box, Paper, Typography, Button, ThemeProvider } from "@mui/material";
import React from "react";
import Appbar from "../Components/Landing/Appbar";

import { useNavigate } from "react-router-dom";
import waves from "../Img/wave.svg";
import Theme from "../CustomTheme";
import {db} from '../firebase-config'
import {collection, getCountFromServer} from "firebase/firestore";
import { useEffect, useState } from "react";

const GenerateReg = () => {
  let currentTimestamp = Date.now()
  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
  let [aheadTicket, setAheadTicket] = useState(0 );
  const count = async() => {
    const coll = collection(db, "regQueuing");
    const snapshot = await getCountFromServer(coll);
    setAheadTicket(snapshot.data().count - 1) ;

    return aheadTicket;
  }

  useEffect(() => {
    count();
    console.log("render");
  },);

  const navigate = useNavigate();
  const landing = () => {
    navigate("/");
  };
  return (
    <>
      <Box>
        <Appbar />
      </Box>
      <Box
        sx={{
          px: { lg: 50, md: 20, xs: 0 },
          pt: { lg: 5, md: 20, xs: 5 },
        }}
      >
        <Box
          component={Paper}
          m={2}
          p={5}
          sx={{
            maxWidth: "1000px",
            backgroundImage: `url(${waves})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1.1rem",
              },
              fontWeight: "bold",
              marginTop: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
            }}
          >
            Queue Line Ticket Number
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "1rem",
              },
            }}
          >
            Registrar Office
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "1.4rem",
                md: "1.2rem",
                sm: "1.3rem",
                xs: "1rem",
              },
            }}
          >
            {date}
          </Typography>

          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "2.5rem",
                md: "1.5rem",
                sm: "1.5rem",
                xs: "2.5rem",
              },
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
            {window.ticket1}
          </Typography>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: {
                lg: "1.4rem",
                md: "1.2rem",
                sm: "1.3rem",
                xs: "1rem",
              },
            }}
          >
                There are {aheadTicket} queue ahead of you
          </Typography>
        </Box>
        <Box m={2}>
          <ThemeProvider theme={Theme}>
            <Button
              variant="contained"
              color="pupMaroon"
              onClick={landing}
              sx={{ width: "100%" }}
            >
              Complete
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
};

export default GenerateReg;