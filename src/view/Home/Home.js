import React from "react";
import Play from "../../assets/img/gameScreens/Play.png";
import LittleHealer from "../../assets/img/gameScreens/LittleHealer.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home-bg">
        <img src={LittleHealer} width="100%" style={{ marginTop: "30%" }} />
        <a href="/game">
          <img src={Play} width="100%" />
        </a>
      </div>
    );
  }
}

export default Home;
