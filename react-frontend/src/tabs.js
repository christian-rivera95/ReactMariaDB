import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CustomMaterialTable from "./customMaterialTable";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    height: "97%",
  },
  tabs: {
    backgroundColor: "white",
    color: "black",
  },
  table: {
    height: "377px",
  },
}));

export default function SimpleTabs({ CurrentOpenTable }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(CurrentOpenTable);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="COLUMNS" {...a11yProps(0)} />
          <Tab label="DATA" {...a11yProps(1)} />
          <Tab label="INDEXES" {...a11yProps(2)} />
          <Tab label="SQL" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {CurrentOpenTable[0] ? (
          <CustomMaterialTable tableColumns={CurrentOpenTable} />
        ) : null}
      </TabPanel>
      <TabPanel value={value} index={1}>
        DATA
      </TabPanel>
      <TabPanel value={value} index={2}>
        INDEXES
      </TabPanel>
      <TabPanel value={value} index={3}>
        SQL
      </TabPanel>
    </div>
  );
}
