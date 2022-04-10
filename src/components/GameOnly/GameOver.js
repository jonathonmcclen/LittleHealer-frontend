import YouWin from "../../assets/img/gameScreens/YouWin.png";
import GameOverImg from "../../assets/img/gameScreens/GameOver.png";
import PlayAgain from "../../assets/img/gameScreens/playAgain.png";

const GameOver = (props) => {
  return (
    <div id="game-over-bg">
      {props.win ? (
        <>
          <img src={YouWin} width="100%" style={{ marginTop: "30%" }} />
          <a href="/game">
            <img src={PlayAgain} width="100%" />
          </a>
        </>
      ) : (
        <>
          <img src={GameOverImg} width="100%" style={{ marginTop: "30%" }} />
          <a href="/game">
            <img src={PlayAgain} width="100%" />
          </a>
        </>
      )}
    </div>
  );
};

export default GameOver;
