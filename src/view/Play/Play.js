import React from "react";
import BattleGround from "../../components/GameOnly/BattleGround";
import "./Backgrounds.css";
import "./animation.css";
import "./transform.css";
import "./Enemies.css";
import "./icons.css";
import "./styles.css";
import "./Floors.css";

import { useSelector } from "react-redux";

const Play = (props) => {
  const { Missions } = useSelector((store) => store.missionsStore);

  return (
    <>
      {Missions.length > 0 && (
        <>
          <div id="battle-ground">
            <BattleGround
              boss={
                Missions[props.match.params.mission_id].bosses[
                  props.match.params.boss_id
                ]
              }
            />
          </div>
        </>
      )}
    </>
  );
};

export default Play;
