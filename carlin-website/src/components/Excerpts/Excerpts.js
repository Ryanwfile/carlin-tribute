import React from "react";
// import PropTypes from "prop-types";
// import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CONSTANTS } from "../../constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function allProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    centered: true,
  };
}

// const rgb = (r, g, b) =>
//   `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    whiteSpace: "pre-line",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
}));

function Excerpts() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        whiteSpace: "pre-line",
      }}
    >
      <AppBar position="relative" className={classes.root}>
        <div>
          <Tabs
            centered={true}
            value={value}
            onChange={handleChange}
            aria-label="aria label for tab"
            textColor="primary"
          >
            <Tab label="Brain Droppings" {...allProps(0)} />
            <Tab
              label="When Will Jesus Bring the Pork Chops"
              {...allProps(1)}
            />
            <Tab label="Last Words With Tony Hendra" {...allProps(2)} />
            <Tab label="Napalm and Silly Putty" {...allProps(3)} />
          </Tabs>
        </div>
      </AppBar>
      <div>
        <TabPanel value={value} index={0}>
          {/* <Card>
            <CardMedia
              className={classes.media}
              image={CONSTANTS.BRAIN_DROPPINGS.image.src}
            ></CardMedia>
          </Card> */}
          <img
            src={CONSTANTS.BRAIN_DROPPINGS.image.src}
            alt={CONSTANTS.BRAIN_DROPPINGS.image.name}
          />
          <Typography variant="body2">
            {CONSTANTS.BRAIN_DROPPINGS.content}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img
            src={CONSTANTS.PORK_CHOPS.image.src}
            alt={CONSTANTS.PORK_CHOPS.image.name}
          />
          {CONSTANTS.PORK_CHOPS.content}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img
            src={CONSTANTS.LAST_WORDS.image.src}
            alt={CONSTANTS.LAST_WORDS.image.name}
          />
          {CONSTANTS.LAST_WORDS.content}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <img
            src={CONSTANTS.NAPALM.image.src}
            alt={CONSTANTS.NAPALM.image.name}
          />
          {CONSTANTS.NAPALM.content}
        </TabPanel>
      </div>
    </div>
  );
}

export default Excerpts;
