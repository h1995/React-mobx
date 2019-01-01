import React from "react";

export default function withPresenter(presenter, View) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this._presenter = new presenter(this.props);
    }
    componentDidMount() {
      this._presenter["mounted"] && this._presenter.mounted();
    }
    render() {
      return <View {...this.props} presenter={this._presenter} />;
    }
  };
}
