import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Sounds() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {CONSTANTS.SOUNDS.map((sound) => {
              return (
                <Grid item xs={3}>
                  <Item>
                    <h4>{sound.name}</h4>
                    <audio
                      controls
                      src={sound.src}
                      style={{ width: "80%" }}
                    ></audio>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
