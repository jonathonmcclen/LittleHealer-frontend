import React from "react";

class Healer extends React.Component {
  render() {
    return (
      <div id="dps-box">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div id="healer" className="healer flip-vert hover"></div>
          </div>
          <div className="col-1"></div>
        </div>
        {true ? <div id="healButton" className="heal"></div> : <div> </div>}
        <div className="char-border">
          <h6 style={{ color: "#fff" }}>{this.props.healer.name}</h6>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width:
                  (this.props.healer.mp / this.props.healer.maxMp) * 100 + "%",
              }}
              aria-valuenow="88"
              aria-valuemin="0"
              aria-valuemax="100/100"
            >
              {this.props.healer.mp}/{this.props.healer.maxMp}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Healer;
