import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Search from "../pages/Search";
import "../assets/styles/App.styl";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </HashRouter>
  );
};

export default App;
