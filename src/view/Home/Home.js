import React from "react";
import "./ui.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-bg">
        <div className="row">
          <div className="col-1"> </div>
          <div className="col-10">
            <div className="littlehealer-logo" width="100%"></div>{" "}
          </div>
          <div className="col-1"> </div>
        </div>
        <a href="/instructions">
          <div className="play" width="100px">
            {" "}
          </div>
        </a>
      </div>
    );
  }
}

export default Home;
