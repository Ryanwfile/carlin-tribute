import { Card, CardMedia } from "@material-ui/core";
// import { CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { CardContent } from "@material-ui/core";
// import { CardActions } from "@material-ui/core";
// import { IconButton } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
// import Swiper from "swiper/bundle";
import "swiper/swiper.min.css";

// import "swiper/components/Navigation/Navigation.min.css";
// import "swiper/components/Scrollbar/Scrollbar.min.css";

import { CONSTANTS } from "../../constants";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function CardCustom(cardCustomProps) {
  const { media } = useStyles();
  return (
    <Card>
      {CONSTANTS.IMAGES.map((image) => {
        return <CardMedia image={image.src} className={media} />;
      })}
    </Card>
  );
}
