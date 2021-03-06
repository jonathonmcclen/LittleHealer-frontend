const GameOver = (props) => {
  return (
    <div id="game-over-bg">
      {props.win ? (
        <>
          <div className="you-win" width="100px"></div>
          <a href="/missions">
            <div className="play-again" width="100px">
              {" "}
            </div>
          </a>
        </>
      ) : (
        <>
          <div className="game-over" width="100px">
            {" "}
          </div>
          <a href="/missions">
            <div className="play-again" width="100px">
              {" "}
            </div>
          </a>
        </>
      )}
    </div>
  );
};

export default GameOver;
