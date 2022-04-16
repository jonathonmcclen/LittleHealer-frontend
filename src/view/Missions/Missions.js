import React from "react";
import { useSelector } from "react-redux";
import MissionCard from "../../components/GameOnly/MissionCard";
import "./styles.css";

//will list all available missions locked & unlocked
export const Missions = () => {
  const { Missions } = useSelector((store) => store.missionsStore);

  return (
    <div className="bg" style={{ width: "100%" }}>
      {Missions.map((mission) => (
        <MissionCard bossName={mission.name} />
      ))}
    </div>
  );
};

export default Missions;
