import React from "react";
import Images from "../Images/Images";
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
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Images />
        </Grid>
        <Grid item xs={3}>
          <Sounds />
        </Grid>
      </Grid>
    </div>
  );
}
