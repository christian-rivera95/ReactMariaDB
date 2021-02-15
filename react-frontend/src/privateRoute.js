import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { component, isAuthenticated, ...remainingProps } = this.props;
    if (!isAuthenticated) return <Redirect to="/login" />;

    return <Route component={component} {...remainingProps} />;
  }
}

export default PrivateRoute;
