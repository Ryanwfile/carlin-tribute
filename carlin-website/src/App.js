import React, { useState } from "react";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Excerpts from "./components/Excerpts/Excerpts";
import About from "./components/About/About";
import Quotes from "./components/Quotes/Quotes";
import Media from "./components/Media/Media";
import "./App.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.mode === "dark" ? "#1A2027" : "#fff",
}));

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createMuiTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={2}>
              <ToggleTheme
                toggleDark={toggleDark}
                settoggleDark={settoggleDark}
              />
            </Grid>
            <Grid item xs={2}>
              <Item>George Carlin Tribute</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>
                <nav>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/excerpts">Excerpts</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                  </ul>
                </nav>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Quotes />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Switch>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/excerpts">
                    <Excerpts />
                  </Route>
                  <Route path="/media">
                    <Media />
                  </Route>
                </Switch>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Images Slider</Item>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
