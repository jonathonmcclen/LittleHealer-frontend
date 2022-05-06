import React from "react";

class Boss extends React.Component {
  render() {
    return <div id="boss" className={"center col-12 " + this.props.css}></div>;
  }
}

export default Boss;
