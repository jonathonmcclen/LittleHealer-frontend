import LittleHealer from "../../assets/img/gameScreens/LittleHealer.png";
import Play from "../../assets/img/gameScreens/Play.png";

const Instructions = () => {
  return (
    <>
      <div className="bg">
        <img src={LittleHealer} width="100%" />
        <ol style={{ color: "#fcba03" }}>
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
          <img src={Play} width="100%" />
        </a>
      </div>
    </>
  );
};

export default Instructions;
