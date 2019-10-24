import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "../pages/Search";
import Home from "../pages/Home";
import "../assets/styles/App.styl";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
