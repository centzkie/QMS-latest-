import React from "react";
import { Grid, Box } from "@mui/material";
import UserNowServingTable from "../Registrar/UserNowServingTable";
import UserQueueLineTable from "../Registrar/UserQueueLineTable";
import UserSkippedTable from "../Registrar/UserSkippedTable";

const Usertable = () => {
  return (
    <>
      <Box my={4} sx={{ px: { lg: 50, md: 23, sm: 5, xs: 3 } }}>
        <Grid container spacing={1.2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <UserNowServingTable />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6}>
            <UserQueueLineTable />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6}>
            <UserSkippedTable />
          </Grid>
        </Grid>
        {/* Pagination */}
        {/* <Box
          mt={4}
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Pagination
            count={lastPostIndex}
            page={currentPage}
            onChange={handleChangePagination}
            shape="rounded"
          />
        </Box> */}
      </Box>
    </>
  );
};

export default Usertable;
