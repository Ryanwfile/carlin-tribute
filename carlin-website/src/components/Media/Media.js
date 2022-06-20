import React from "react";
import Sounds from "../Sounds/Sounds";
import { Grid } from "@mui/material";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { CONSTANTS } from "../../constants";

export default function Media() {
  return (
    <div className="media-wrapper">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Sounds />
        </Grid>
        {CONSTANTS.VIDEOS.map((video, index) => {
          return (
            <Grid item xs={3}>
              <VideoPlayer videoId={video.src} name={video.name} key={index} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
