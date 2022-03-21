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
          <div className="col-3">
            <div className="berzerk"></div>
          </div>
          <div className="col-6">
            <div
              onMouseLeave={(e) => this.jumpEnd(e)}
              onMouseEnter={(e) => this.jump(e)}
              id="tank"
            ></div>
          </div>
          <div className="col-3"></div>
        </div>

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
      </div>
    );
  }
}

export default Tank;
