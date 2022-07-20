const MissionCard = ({ mission_id, bossId, bossName, hp, attack, bg, css }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row" height="100%">
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
            <p className="stat">
              <strong>HP:</strong> {hp} <strong>ATK:</strong> {attack}
            </p>
            <p className="stat"></p>
            <a href={`/play/${mission_id}/${bossId}`}>
              <div className="play" width="100%"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionCard;
