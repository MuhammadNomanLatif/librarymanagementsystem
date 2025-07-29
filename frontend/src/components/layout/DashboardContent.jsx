import React from "react";
import { Grid } from "@mui/material";
import CardSample from "../CardSample";
import VisitorsChart from "../../New Components used for later/VisitorsChart";
import BooksAllocationChart from "../../New Components used for later/BooksAllocationChart";
import BookAvailabilityChart from "../../New Components used for later/BookAvailabilityChart";

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
