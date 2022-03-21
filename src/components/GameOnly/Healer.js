import React from "react";

class Healer extends React.Component {
  render() {
    return (
      <div id="dps-box">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-8">
            <div id="dps" className="healer flip-vert"></div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="heal"></div>

        <h6>Tank Name</h6>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "88%" }}
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            88%
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "88%" }}
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100/100"
          >
            88%
          </div>
        </div>
      </div>
    );
  }
}

export default Healer;
