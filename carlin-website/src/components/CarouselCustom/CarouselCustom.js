import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CardCustom from "../CardCustom/CardCustom";

export default function CarouselCustom(props) {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ height: "25vh", display: "grid", placeItems: "center" }}
        >
          <Typography variant="h2">Carousel Top</Typography>
        </Grid>
        <Grid item container xs={12} justify="center">
          <Grid item xs={6}>
            <CardCustom></CardCustom>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
