import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  // when palette type is changed via setToggleDark used in the handleModeChange handler it applies the default theme which updates bg, and color
  root: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    height: 56,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function SmallComponent({ toggleDark, settoggleDark }) {
  const classes = useStyles();

  // Trigger toggletheme using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Card elevation={8}>
        <Switch
          checked={toggleDark}
          onChange={handleModeChange}
          name="toggleDark"
          color="default"
        />
      </Card>
    </Grid>
  );
}
