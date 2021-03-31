import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/index.css";
import SelectionGame from "./pages/SelectionGame";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SelectionGame} exact path="/" />
      </Switch>
    </Router>
  );
};

export default App;
