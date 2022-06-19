import React, { useState } from "react";
import SmallComponent from "./components/SmallComponent/SmallComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}>
            <SmallComponent
              toggleDark={toggleDark}
              settoggleDark={settoggleDark}
            />
          </Grid>
          <Grid item xs={2}>
            <Item>Title</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>Nav Bar Here</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Quotes Carousel</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>About</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Images Slider</Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
