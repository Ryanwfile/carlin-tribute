import { Card, CardContent, CardMedia, Paper } from "@material-ui/core";
import { CardHeader, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

export default function SingleExcerpt(props) {
  const { media } = useStyles();
  return (
    <Paper elevation={3}>
      <Card>
        <CardHeader title={props.name}></CardHeader>
        <CardMedia className={media} image={props.image}></CardMedia>
        <CardContent>
          <Typography variant="body2">{props.content}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
