import React, { Component } from "react";
import { observable } from "mobx";
import { DatePicker } from "antd";

class About extends Component {
  @observable price = "about";
  render() {
    return (
      <div>
        <p>{this.price}</p>
        <DatePicker />
      </div>
    );
  }
}

export default About;
