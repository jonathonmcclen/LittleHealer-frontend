import YouWin from "../../assets/img/gameScreens/YouWin.png";
import GameOverImg from "../../assets/img/gameScreens/GameOver.png";

const GameOver = (props) => {
  return (
    <div id="game-over-bg">
      {props.win ? (
        <img src={YouWin} width="100%" style={{ marginTop: "50%" }} />
      ) : (
        <img src={GameOverImg} width="100%" style={{ marginTop: "50%" }} />
      )}
    </div>
  );
};

export default GameOver;
