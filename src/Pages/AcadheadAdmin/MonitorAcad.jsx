import React from "react";
import { Grid, Typography } from "@mui/material";
import QueueLine from "../../Components/Acadhead/MonitorQueueLine";
import NowServing from "../../Components/Acadhead/MonitorNowServing";
import Skipped from "../../Components/Acadhead/MonitorSkipped";

import Time from "../../Components/Time";
import EntertainmentVid from "../../Components/EntertainmentVid";
import AnnouncementSlider from "../../Components/Acadhead/AnnouncementSlider";

const MonitorAcad = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={6}>
          <Grid container lg={12} spacing={2} p={5} pb={1}>
            <Grid item lg={12}>
              <NowServing />
            </Grid>
            <Grid item lg={6}>
              <QueueLine />
            </Grid>
            <Grid item lg={6}>
              <Skipped />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <EntertainmentVid />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              color: "#880000",
              textDecoration: "underline",
            }}
          >
            Academic Head of Program
          </Typography>
          <Time />
        </Grid>
      </Grid>
      <AnnouncementSlider />
    </>
  );
};

export default MonitorAcad;