import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CONSTANTS } from "../../constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Sounds() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {CONSTANTS.SOUNDS.map((sound) => {
          return (
            <Grid item xs={3}>
              <Item>
                <h4>{sound.name}</h4>
                <audio controls src={sound.src}></audio>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
