import React from "react";
import BattleGround from "../../components/GameOnly/BattleGround";
import "./Backgrounds.css";
import "./animation.css";
import "./transform.css";
import "./Enemies.css";
import "./icons.css";

class Game extends React.Component {
  render() {
    return (
      <div id="battle-ground">
        <BattleGround />
      </div>
    );
  }
}

export default Game;
