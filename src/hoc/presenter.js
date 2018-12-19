import React from "react";

export default function withPresenter(presenter, View) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this._presenter = new presenter(this.props);
    }

    render() {
      return <View {...this.props} presenter={this._presenter} />;
    }
  };
}
