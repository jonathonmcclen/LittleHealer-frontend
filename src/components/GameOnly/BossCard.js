import PlayBtn from "../../assets/img/btns/playbtn.png";

const MissionCard = ({ mission_id, bossId, bossName, hp, attack, bg, css }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row">
          <div className="col-4">
            <div className={`mission-preview-img ${bg}`}>
              <div
                className={`boss-preview ${css}`}
                style={{ height: "100px", margin: "0", width: "100%" }}
              ></div>
            </div>
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
            <a href={`/play/${mission_id}/${bossId}`}>
              <img src={PlayBtn} width="100%" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionCard;
