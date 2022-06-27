const MissionCard = ({ mission }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row">
          <div className="col-4">
            <div className="mission-preview-img"></div>
          </div>
          <div className="col-5">
            <h5>{mission.name}</h5>
            <p>
              <strong>HP:</strong>
            </p>
            <p>
              <strong>ATK:</strong>
            </p>
          </div>
          <div className="col-3">
            <a href={`/missions/${mission.id - 1}`}>
              <div className="play" width="100%"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionCard;
