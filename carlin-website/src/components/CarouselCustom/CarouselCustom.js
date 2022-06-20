import { Grid } from "@material-ui/core";
import CardCustom from "../CardCustom/CardCustom";

export default function CarouselCustom(carouselProps) {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ height: ".2vh", display: "grid", placeItems: "center" }}
        ></Grid>
        <Grid item container xs={12} justify="center">
          <Grid item xs={6}>
            <CardCustom></CardCustom>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
