import React from "react";
import { Grid } from "@mui/material";
import CardSample from "../CardSample";
import VisitorsChart from "../VisitorsChart";
import BooksAllocationChart from "../BooksAllocationChart";
import BookAvailabilityChart from "../BookAvailabilityChart";

const DashboardContent = () => {
  return (
    <Grid>
      <CardSample />
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <VisitorsChart />
        <BooksAllocationChart />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookAvailabilityChart />
        <VisitorsChart />
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
