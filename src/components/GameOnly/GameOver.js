const GameOver = (props) => {
  return (
    <div id="game-over-bg">
      {props.win ? (
        <>
          <div
            className="you-win"
            width="100%"
            style={{ marginTop: "30%" }}
          ></div>
          <a href="/missions/0">
            <div className="play-again" width="100%"></div>
          </a>
        </>
      ) : (
        <>
          <div
            className="game-over"
            width="100%"
            style={{ marginTop: "30%" }}
          ></div>
          <a href="/missions/0">
            <div className="play-again" width="100%"></div>
          </a>
        </>
      )}
    </div>
  );
};

export default GameOver;
