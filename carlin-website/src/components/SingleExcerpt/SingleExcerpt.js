import { Card, CardContent, CardMedia, Paper } from "@material-ui/core";
import { CardHeader, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    width: 90 * 3,
    height: 160 * 3,
  },
});

export default function SingleExcerpt(props) {
  const { media } = useStyles();
  return (
    <Paper elevation={3}>
      <Card>
        <CardHeader title={props.name}></CardHeader>
        <CardMedia>
          <img src={props.image} alt={props.name} className={media} />
        </CardMedia>
        <CardContent>
          <Typography variant="body2">{props.content}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
