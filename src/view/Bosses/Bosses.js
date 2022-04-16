// will list all bosses in selected mission
import { useSelector } from "react-redux";
import BossCard from "../../components/GameOnly/BossCard";

import "./styles.css";

const Bosses = () => {
  const { Missions } = useSelector((store) => store.missionsStore);
  const { Loading } = useSelector((store) => store.missionsStore.Loading);

  return (
    <>
      {Missions.length > 0 && (
        <div className="bg" style={{ width: "100%" }}>
          {Missions[0].bosses.map((boss) => (
            <BossCard
              bossName={boss.name}
              hp={boss.health}
              attack={boss.attack_power}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Bosses;
