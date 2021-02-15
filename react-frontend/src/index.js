import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./appRouter";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
ReactDOM.render(
  <AppRouter history={history} />,
  document.getElementById("root")
);

serviceWorker.unregister();
