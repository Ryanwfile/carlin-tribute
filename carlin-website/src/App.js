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
import CarouselCustom from "./components/CarouselCustom/CarouselCustom";
import { Typography } from "@mui/material";
// import Bio from "./components/Bio/Bio";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
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
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={2}>
              <ToggleTheme
                isDarkTheme={toggleDark}
                settoggleDark={settoggleDark}
              />
            </Grid>
            <Grid item xs={2} alignSelf="center">
              <Item>
                <Typography variant="h5">George Carlin Tribute</Typography>
              </Item>
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
                    <Grid
                      item
                      container
                      xs={12}
                      sx={{
                        paddingTop: -500,
                      }}
                    >
                      {/* <Grid item xs={3}>
                        <Bio></Bio>
                      </Grid> */}
                      {/* <Grid item xs={1}></Grid> */}
                      <Grid item xs={12}>
                        <About />
                      </Grid>
                    </Grid>
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/excerpts">
                    <Excerpts isDarkTheme={toggleDark} />
                  </Route>
                  <Route path="/media">
                    <Media />
                  </Route>
                </Switch>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <CarouselCustom />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
