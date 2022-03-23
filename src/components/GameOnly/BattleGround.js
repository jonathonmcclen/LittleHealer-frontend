import React from "react";
import BattleHeader from "./BattleHeader";
import Tank from "./Tank";
import Dps from "./Dps";
import Healer from "./Healer";
import Boss from "./Boss";

class BattleGround extends React.Component {
  render() {
    return (
      <div className="tall-rocks" id="background">
        <BattleHeader />
        <div className="row" id="boss-box">
          <Boss />
        </div>
        <div className="party row">
          <div className="col-3">
            <Dps />
          </div>
          <div className="col-6">
            <Tank />
          </div>
          <div className="col-3">
            <Healer />
          </div>
        </div>
      </div>
    );
  }
}

export default BattleGround;
