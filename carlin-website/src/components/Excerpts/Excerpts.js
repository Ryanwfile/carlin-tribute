import React from "react";
// import PropTypes from "prop-types";
// import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CONSTANTS } from "../../constants";
import SingleExcerpt from "../SingleExcerpt/SingleExcerpt";

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

// function allProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//     centered: true,
//   };
// }

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
  tabs: {
    "& .MuiTabs-indicator": {
      // color: "black",
      backgroundColor: "black",
    },
  },
}));

function Excerpts(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const textColor = props.isDarkTheme ? "white" : "black";
  return (
    <div
      style={{
        whiteSpace: "pre-line",
        // color: "red",
      }}
    >
      {/* <AppBar position="relative" className={classes.root}> */}
      <div>
        <Tabs
          centered={true}
          value={value}
          onChange={handleChange}
          aria-label="aria label for tab"
          textColor={textColor}
          className={classes.tabs}
          // fontWeight="900"
        >
          <Tab
            label="Brain Droppings"
            // {...allProps(0)}
            style={{
              fontWeight: 900,
            }}
          />
          <Tab
            label="When Will Jesus Bring the Pork Chops"
            style={{
              fontWeight: 900,
            }}
            // {...allProps(1)}
          />
          <Tab
            label="Last Words With Tony Hendra"
            // {...allProps(2)}
            style={{
              fontWeight: 900,
            }}
          />
          <Tab
            label="Napalm and Silly Putty"
            // {...allProps(3)}
            style={{
              fontWeight: 900,
            }}
          />
        </Tabs>
      </div>
      {/* </AppBar> */}
      <div>
        <TabPanel value={value} index={0}>
          <SingleExcerpt
            image={CONSTANTS.BRAIN_DROPPINGS.image.src}
            name={CONSTANTS.BRAIN_DROPPINGS.image.name}
            content={CONSTANTS.BRAIN_DROPPINGS.content}
          ></SingleExcerpt>

          {/* <img
            src={CONSTANTS.BRAIN_DROPPINGS.image.src}
            alt={CONSTANTS.BRAIN_DROPPINGS.image.name}
          />
          <Typography variant="body2">
            {CONSTANTS.BRAIN_DROPPINGS.content}
          </Typography> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SingleExcerpt
            image={CONSTANTS.PORK_CHOPS.image.src}
            name={CONSTANTS.PORK_CHOPS.image.name}
            content={CONSTANTS.PORK_CHOPS.content}
          ></SingleExcerpt>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SingleExcerpt
            image={CONSTANTS.LAST_WORDS.image.src}
            name={CONSTANTS.LAST_WORDS.image.name}
            content={CONSTANTS.LAST_WORDS.content}
          ></SingleExcerpt>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SingleExcerpt
            image={CONSTANTS.NAPALM.image.src}
            name={CONSTANTS.NAPALM.image.name}
            content={CONSTANTS.NAPALM.content}
          ></SingleExcerpt>
        </TabPanel>
      </div>
    </div>
  );
}

export default Excerpts;
