import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/index.css";
import SelectionGame from "./pages/SelectionGame";
import SelectionRound from "./pages/SelectionRound";
import PlayWithFriends from "./pages/PlayWithFriends";
import PlayWithComputer from "./pages/PlayWithComputer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SelectionGame} exact path="/" />
        <Route component={SelectionRound}  path="/round" />
        <Route component={PlayWithFriends}  path="/comingsoon" />
        <Route component={PlayWithComputer}  path="/game" />
      </Switch>
    </Router>
  );
};

export default App;
