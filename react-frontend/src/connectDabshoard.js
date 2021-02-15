import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomizedTreeView from "./treeView";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  div: {
    border: "solid",
  },
  sidepanel: {
    height: "618px",
    maxHeight: "618px",
    border: "solid",
    borderWidth: "2px 2px 2px 2px",
    marginBottom: "20px",
    overflow: "scroll",
  },
  panel: {
    border: "solid",
    borderWidth: "2px 2px 2px 0px",
    marginBottom: "20px",
    overflow: "scroll",
  },
});

export class ConnectDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databases: [],
      tables: [],
    };
  }

  componentDidMount() {
    this.getDatabases();
  }

  getDatabases = (_) => {
    fetch("http://localhost:4000/databases")
      .then((response) => response.json())
      .then((response) => this.setState({ databases: response.data }))
      .catch((err) => console.error(err));
  };

  render() {
    const { classes } = this.props;
    const { databases } = this.state;
    return (
      <React.Fragment>
        <Container className={classes.div}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ marginTop: "10px" }}>Connect</div>
            </Grid>
            <Grid item xs={3} className={classes.sidepanel}>
              <CustomizedTreeView databases={databases} />
            </Grid>
            <Grid item xs={8} className={classes.panel}>
              <div>Panel</div>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ConnectDashboard);
