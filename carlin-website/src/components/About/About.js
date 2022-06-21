import React from "react";
import styles from "./About.module.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CONSTANTS } from "../../constants";
import { Typography } from "@material-ui/core";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <div className={styles.aboutWrapper}>
      <Item>
        <Typography variant="h5">{CONSTANTS.ABOUT.title} </Typography>
        <Typography variant="body1">{CONSTANTS.ABOUT.content}</Typography>
      </Item>
    </div>
  );
}

export default About;
