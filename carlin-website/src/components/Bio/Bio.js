import { CONSTANTS } from "../../constants";
import { Card, Typography } from "@material-ui/core";

export default function Bio() {
  return (
    <Card>
      <Typography variant="h5">Biography</Typography>

      <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
        {CONSTANTS.ABOUT.bio}
      </Typography>
    </Card>
  );
}
