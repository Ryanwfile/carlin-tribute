import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    'aria-controls': `simple-tabpanel-${index}`,
    centered: true
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    whiteSpace: 'pre-line'

  },
  tabs: {

    "& .MuiTabs-indicator": {
      // display: "none",
      backgroundColor: "black"
    }

  }
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
        <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="HELLO, CAN YOU SEE ME, I AM AN ARIA LABEL" >
          <Tab label="Brain Droppings" {...allProps(0)} />
          <Tab label="When Will Jesus Bring the Pork Chops" {...allProps(1)} />
          <Tab label="Last Words With Tony Hendra" {...allProps(2)} />
          <Tab label="Napalm and Silly Putty" {...allProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="excerpts-wrapper" >
        {CONSTANTS.BRAIN_DROPPINGS}
        <img src={CONSTANTS.EXCERPTS_IMAGES[0].src} alt="Brain Droppings Cover" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {CONSTANTS.PORK_CHOPS}
        <img src={CONSTANTS.EXCERPTS_IMAGES[1].src} alt="When Will Jesus Bring the Pork Chops Cover" />

      </TabPanel>
      <TabPanel value={value} index={2}>
        {CONSTANTS.LAST_WORD}
        <img src={CONSTANTS.EXCERPTS_IMAGES[2].src} alt="Last Words With Tony Hendra Cover" />


      </TabPanel>
      <TabPanel value={value} index={3}>
        {CONSTANTS.NAPALM}
        <img src={CONSTANTS.EXCERPTS_IMAGES[3].src} alt="Napalm and Silly Putty Cover" />

      </TabPanel>
    </div>
  );
}

