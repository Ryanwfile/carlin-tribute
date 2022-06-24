import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@mui/material/IconButton";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ToggleTheme({ isDarkTheme, settoggleDark }) {
  const handleModeChange = () => {
    settoggleDark(!isDarkTheme);
  };
  return (
    <Grid container justify="left" alignItems="center">
      <Card
        elevation={12}
        style={{
          padding: "7px",
        }}
      >
        <IconButton color="inherit">
          {isDarkTheme ? (
            <Brightness7Icon onClick={handleModeChange} />
          ) : (
            <Brightness4Icon onClick={handleModeChange} />
          )}
        </IconButton>
        <Switch
          checked={isDarkTheme}
          onChange={handleModeChange}
          name="toggleDark"
          color="default"
        />
      </Card>
    </Grid>
  );
}
