const Instructions = () => {
  return (
    <>
      <div className="bg" style={{ minHeight: "100vh" }}>
        <div className="littlehealer-logo" width="100%"></div>
        <ol style={{ color: "#fcba03", fontSize: "20px" }}>
          <li>Select a boss to fight</li>&nbsp;
          <li>Tap the BOSS to attack them with arrows</li>
          &nbsp;
          <li>
            The BOSS will attack your tank untill he is dead. Make sure to tap
            your healer to keep them healthy.
          </li>
          &nbsp;
          <li>
            If your entire party dies, you lose. If you make sure your party
            works together, you will surely be victorious!
          </li>
        </ol>
        <a href="/missions">
          <div className="play" width="100%"></div>
        </a>
      </div>
    </>
  );
};

export default Instructions;
