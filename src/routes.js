import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@pages/home";
import About from "@pages/about";

class BaseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default BaseRouter;
