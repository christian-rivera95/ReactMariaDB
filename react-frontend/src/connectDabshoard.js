import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomizedTreeView from "./treeView";

const useStyles = makeStyles((theme) => ({
  div: {
    border: "solid",
    // height: "660px",
    // maxHeight: "660px",
  },
  sidepanel: {
    height: "618px",
    maxHeight: "618px",
    border: "solid",
    borderWidth: "2px 2px 2px 2px",
    marginBottom: "20px",
  },
  panel: {
    border: "solid",
    borderWidth: "2px 2px 2px 0px",
    marginBottom: "20px",
  },
}));

export default function ConnectDashboard({ isAdmin, history }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.div}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ marginTop: "10px" }}>Connect</div>
          </Grid>
          <Grid item xs={3} className={classes.sidepanel}>
            <CustomizedTreeView />
          </Grid>
          <Grid item xs={8} className={classes.panel}>
            <div>Panel</div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
