import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/index.css";
import SelectionGame from "./pages/SelectionGame";
import SelectionRound from "./pages/SelectionRound";
import PlayWithFriends from "./pages/PlayWithFriends";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SelectionGame} exact path="/" />
        <Route component={SelectionRound} path="/round" />
        <Route component={PlayWithFriends} path="/comingsoon" />
      </Switch>
    </Router>
  );
};

export default App;
