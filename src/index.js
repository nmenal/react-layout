import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import "./styles.css";

import ComponentTwo from "./ComponentTwo";
import ComponentOne from "./ComponentOne";
import LayoutRouteTwo from "./LayoutTwo";
import LayoutRouteOne from "./LayoutOne";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/myComponent1" />
        </Route>
        <LayoutRouteOne path="/myComponent1" component={ComponentOne} />
        <LayoutRouteTwo path="/myComponent2" component={ComponentTwo} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
