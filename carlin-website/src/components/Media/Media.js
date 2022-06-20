import React from "react";
import Sounds from "../Sounds/Sounds";
import { Grid } from "@mui/material";

export default function Media() {
  return (
    <div className="media-wrapper">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Sounds />
        </Grid>
      </Grid>
    </div>
  );
}
