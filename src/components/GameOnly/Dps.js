import React from "react";

class Dps extends React.Component {
  render() {
    return (
      <div id="dps-box">
        <div className="row">
          <div className="col-1"> </div>
          <div className="col-10">
            <div id="dps" className="dps"></div>
          </div>
          <div className="col-1"> </div>
        </div>
        {true ? (
          <div id="ultButton" className="power-bolt"></div>
        ) : (
          <div> </div>
        )}
        <div className="char-border">
          <h6 style={{ color: "#fff" }}>{this.props.name}</h6>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: (this.props.hp / this.props.maxHp) * 100 + "%" }}
              aria-valuenow="88"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.props.hp}/{this.props.maxHp}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dps;
