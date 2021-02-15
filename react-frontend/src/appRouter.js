import React from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import ConnectDashboard from "./connectDabshoard";

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={ConnectDashboard} />
    </Switch>
  </Router>
);

export default AppRouter;
