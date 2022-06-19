import React from "react";
import styles from "./About.module.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CONSTANTS } from "../../constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.aboutWrapper}>
        <Item>
          <h4 className={styles.title}>{CONSTANTS.ABOUT.title}</h4>
          {CONSTANTS.ABOUT.content}
        </Item>
      </div>
    </ThemeProvider>
  );
}

export default About;
