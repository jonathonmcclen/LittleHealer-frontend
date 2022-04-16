import PlayBtn from "../../assets/img/btns/playbtn.png";

const MissionCard = ({ bossName, hp, attack }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row">
          <div className="col-4">
            <div className="mission-preview-img"></div>{" "}
          </div>
          <div className="col-5">
            <h6 className="boss-title">{bossName}</h6>
          </div>
          <div className="col-3">
            <p className="stat">
              <strong>HP:</strong> {hp}
            </p>
            <p className="stat">
              <strong>ATK:</strong> {attack}
            </p>
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
