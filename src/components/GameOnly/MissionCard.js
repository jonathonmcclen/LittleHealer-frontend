import PlayBtn from "../../assets/img/btns/playbtn.png";

const MissionCard = ({ bossName, hp, attack }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row">
          <div className="col-4">
            <div className="mission-preview-img"></div>
          </div>
          <div className="col-5">
            <h5>{bossName}</h5>
            <p>
              <strong>HP:</strong> {hp}
            </p>
            <p>
              <strong>ATK:</strong> {attack}
            </p>
          </div>
          <div className="col-3">
            <a href="/game">
              <img src={PlayBtn} width="100%" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionCard;
