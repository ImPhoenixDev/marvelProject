import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "../pages/Search";
import "../assets/styles/App.styl";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
