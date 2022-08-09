const MissionCard = ({ mission }) => {
  return (
    <>
      <div className="mission-card col-12">
        <div className="row" height="100%">
          <div className="col-4">
            <div className="mission-preview-img"></div>
          </div>
          <div className="col-5" style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{fontSize: '20px'}}>{mission.name}</span>
            <span style={{fontSize: '15px'}}>HP:</span>
            
            <span style={{fontSize: '15px'}}>ATK:</span>
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
