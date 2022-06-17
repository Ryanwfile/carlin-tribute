import React from "react";
import PropTypes from "prop-types";
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    centered: true,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    whiteSpace: "pre-line",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "black",
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <div className={classes.container}>
          <Tabs
            centered={true}
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            aria-label="HELLO, CAN YOU SEE ME, I AM AN ARIA LABEL"
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
      <TabPanel value={value} index={0} className="excerpts-wrapper">
        <img
          src={CONSTANTS.BRAIN_DROPPINGS.image.src}
          alt={CONSTANTS.BRAIN_DROPPINGS.image.name}
        />
        {CONSTANTS.BRAIN_DROPPINGS.content}
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
  );
}
