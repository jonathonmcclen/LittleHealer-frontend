import React from "react";

const BattleHeader = (props) => {
  return (
    <div className="celtic-border" id="battle-header">
      <h2 id="bossName">{props.name}</h2>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: (props.health / props.maxHp) * 100 + "%" }}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.health} / {props.maxHp}
        </div>
      </div>
      {props.health} / {props.maxHp}
    </div>
  );
};

export default BattleHeader;
