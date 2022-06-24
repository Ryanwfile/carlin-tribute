import React from "react";
import styles from "./About.module.css";
import { CONSTANTS } from "../../constants";
import { Grid, Typography } from "@material-ui/core";

function About() {
  return (
    <Grid
      container
      className={styles.aboutWrapper}
      justify="center"
      xs={12}
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h5">{CONSTANTS.ABOUT.title} </Typography>
      </Grid>
      <Grid item>
        <p
          style={{
            fontSize: "18px",
          }}
        >
          {CONSTANTS.ABOUT.content}
        </p>
      </Grid>
    </Grid>
  );
}

export default About;
