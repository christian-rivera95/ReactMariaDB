import React from "react";
import "./App.css";
import Login from "./login";
import Dashboard from "./dashboard";
import CheckOut from "./checkout";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import CreateUserForm from "./createUserForm";
import ConnectDashboard from "./connectDabshoard";

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        isAuthenticated={true}
      />
      <PrivateRoute
        path="/checkout"
        component={CheckOut}
        isAuthenticated={true}
      />
      <PrivateRoute
        path="/createUser"
        component={CreateUserForm}
        isAuthenticated={true}
      />
      <Route path="/" component={ConnectDashboard} />
    </Switch>
  </Router>
);

export default AppRouter;
