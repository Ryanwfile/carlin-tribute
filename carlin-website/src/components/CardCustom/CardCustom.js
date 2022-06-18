import { Card, CardMedia } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { CardContent } from "@material-ui/core";
// import { CardActions } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { CONSTANTS } from "../../constants";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function CardCustom() {
  const { media } = useStyles();
  return (
    <Card>
      <CardHeader title="Carousel Header"></CardHeader>

      {CONSTANTS.IMAGES.map((image) => {
        return <CardMedia image={image.src} className={media} />;
      })}
    </Card>
  );
}
