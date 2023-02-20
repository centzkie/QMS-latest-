import React from "react";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";

const Info = (props) => {
  return (
    <>
      <Box
        m={3}
        mx={{ lg: 27, md: 10, sm: 5, xs: 4 }}
        sx={{ padding: "10px 20px", bgcolor: "white", borderRadius: "10px" }}
        data-aos="fade-right"
        component={Paper}
      >
        <Typography
          pt={2}
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          How to use?
        </Typography>
        <Box
          px={2}
          pb={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ol>
            <Typography
              sx={{
                fontSize: { lg: "1.2rem", sx: "1rem" },
                textAlign: "justify",
              }}
            >
              <li>
                Choose what office you need to queue for your transaction
                between Academic Head Office or Registrar office.
              </li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>If you are not IN-QUEUE click Get Inline.</li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>Fill Out the form.</li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>Check the data if misspelled or Incorrect.</li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>Read the terms of Use and Privacy statement.</li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>Click Submit.</li>
            </Typography>

            <Typography
              sx={{ fontSize: { lg: "1.2rem", sm: "0.5rem", sx: "0.8rem" } }}
            >
              <li>Remember or do a Screenshot of your Ticket number.</li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>
                If you want to cancel or check your transaction click view
                transaction.
              </li>
            </Typography>

            <Typography sx={{ fontSize: { lg: "1.2rem", sx: "1rem" } }}>
              <li>Check your transaction using your email you use in form.</li>
            </Typography>
          </ol>
        </Box>
      </Box>
    </>
  );
};

export default Info;
