import React, { Component } from "react";
import { Button } from "antd";
import { observer } from "mobx-react";
import Presenter from "./HomePM";
import withPresenter from "@hoc/presenter";

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.presenter.getPrice}>Price Change</Button>
        <p>{this.props.presenter.price}</p>
      </div>
    );
  }
}

export default withPresenter(Presenter, Home);
