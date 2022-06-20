import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@mui/material/IconButton";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

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
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleTheme({ isDarkTheme, settoggleDark }) {
  const theme = useTheme();
  const classes = useStyles();
  const colorMode = React.useContext(ColorModeContext);
  // Trigger toggletheme using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!isDarkTheme);
  };
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Card elevation={8}>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
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
