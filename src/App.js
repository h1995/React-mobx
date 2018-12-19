import React, { Component } from "react";
import { observable } from "mobx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BaseRouter from "./routes";

class App extends Component {
  @observable price = 0;
  render() {
    return (
      <Router>
        <Route path="/" component={BaseRouter} />
      </Router>
    );
  }
}

export default App;
