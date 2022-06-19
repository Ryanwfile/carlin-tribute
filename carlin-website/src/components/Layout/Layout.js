import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ToggleColorMode from "../ToggleColorMode/ToggleColorMode";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.mode === "dark" ? "#1A2027" : "#fff",
}));

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={2}>
          <Item>
            <ToggleColorMode />
          </Item>
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
  );
}
