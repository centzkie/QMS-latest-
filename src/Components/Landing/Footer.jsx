import React from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
const Footer = () => {
  return (
    <div style={{ position: "relative", bottom: 0 }}>
      <Box mt={4} p={4} bgcolor="white">
        <Grid container spacing={3}>
          <Grid item lg={3} md={8} xs={12}>
            <Typography color="#880000" sx={{ fontWeight: "bold" }}>
              ONLINE SERVICES
            </Typography>
            <ul>
              <Link
                href="https://www.pup.edu.ph/iapply//"
                target="_blank"
                rel="noreferrer"
                sx={{ textDecoration: "none" }}
              >
                <Typography color="#939393" p={0.5} pl={3}>
                  <li>PUP iApply </li>
                </Typography>
              </Link>

              <Link
                href="https://sis2.pup.edu.ph/student/"
                target="_blank"
                rel="noreferrer"
                sx={{ textDecoration: "none" }}
              >
                <Typography color="#939393" p={0.5} pl={3}>
                  <li>SIS for Students</li>
                </Typography>
              </Link>

              <Link
                href="https://sis2.pup.edu.ph/faculty/"
                target="_blank"
                rel="noreferrer"
                sx={{ textDecoration: "none" }}
              >
                <Typography color="#939393" p={0.5} pl={3}>
                  <li>SIS for Faculty</li>
                </Typography>
              </Link>
            </ul>
          </Grid>
          <Grid item lg={3} md={8} xs={12}>
            <Typography color="#880000" sx={{ fontWeight: "bold" }}>
              QUICK LINKS
            </Typography>
          </Grid>
          <Grid item lg={6} md={8} xs={12}>
            <Typography color="#880000" sx={{ fontWeight: "bold" }}>
              KEEP IN TOUCH
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
