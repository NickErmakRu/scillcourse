import React from "react";

class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
  constructor(props: { prop1: number }) {
    super(props);
    this.state = {
        state1: "123"
    }
  }
  public render() {
    return (
      <div>{ this.props.prop1 }</div>
    )
  }
}