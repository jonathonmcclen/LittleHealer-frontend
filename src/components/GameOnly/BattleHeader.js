import React from "react";

const BattleHeader = () => {
  return (
    <div id="battle-header">
      <h2>Monster Name</h2>
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
};

export default BattleHeader;
