import React from "react";
import "./ui.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-bg">
        <div className="littlehealer-logo" width="100%"></div>{" "}
        <a href="/instructions">
          <div className="play"> </div>
        </a>
      </div>
    );
  }
}

export default Home;
