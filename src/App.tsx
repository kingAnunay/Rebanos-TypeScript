import * as React from "react";
import "./styles.css";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from "./Header";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header/>
        </Route>
      </Switch>
    </Router>
  );
}
