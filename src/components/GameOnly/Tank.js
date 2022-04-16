import React from "react";

class Tank extends React.Component {
  jump = (e) => {
    e.target.classList.add("jump");
  };

  jumpEnd = (e) => {
    e.target.classList.remove("jump");
  };

  render() {
    return (
      <div id="tank-box">
        <div className="row">
          <div className="col-12">
            <div id="tank" className="tank"></div>
          </div>
        </div>
        {true ? <div id="tauntButton" className="berzerk"></div> : <div> </div>}
        <div className="char-border">
          <h6 style={{ color: "#fff" }}>{this.props.tank.name}&nbsp;</h6>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{
                width:
                  (this.props.tank.health / this.props.tank.maxHp) * 100 + "%",
              }}
              aria-valuenow="88"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {this.props.tank.health} / {this.props.tank.maxHp}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tank;
