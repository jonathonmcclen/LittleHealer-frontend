// will list all bosses in selected mission
import { useSelector } from "react-redux";
import BossCard from "../../components/GameOnly/BossCard";

import "./styles.css";

const Bosses = (props) => {
  const { Missions } = useSelector((store) => store.missionsStore);

  return (
    <>
      {Missions.length > 0 && (
        <div className="bg" style={{ width: "100%" }}>
          <h2>
            <a
              href="/missions"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {"< Missions"}
            </a>
          </h2>
          {Missions[props.match.params.mission_id].bosses.map((boss) => (
            <BossCard
              bossName={boss.name}
              hp={boss.health}
              attack={boss.attack_power}
              bossId={boss.id}
              mission_id={props.match.params.mission_id}
              bg={boss.bg}
              css={boss.css_class}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Bosses;
