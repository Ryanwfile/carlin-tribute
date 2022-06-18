import React from "react";
import Images from "../Images/Images";
import { Grid } from "@mui/material";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: rgb(14, 9, 9),
//     whiteSpace: "pre-line",
//     color: "aliceblue",
//   },
//   box: {
//     display:"flex",
//     justifyItems: "center"
//     },
//   },
// }));

export default function Media() {
  return (
    <div className="media-wrapper">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Images />
        </Grid>
      </Grid>
    </div>
  );
}
