import React from "react";

//components
import BattleHeader from "./BattleHeader";
import Tank from "./Tank";
import Dps from "./Dps";
import Healer from "./Healer";
import Boss from "./Boss";
import GameOver from "./GameOver";

//sounds
import ClickSound from "../../assets/sounds/Bamboo_Spell_Attack_One_Shot_v2.wav";
import Sound from "../../assets/sounds/Devil_Stab_Cast_Sword.wav";
import Sound1 from "../../assets/sounds/Sword-Attack_Swoosh_Swipe-1C.wav";
import Sound2 from "../../assets/sounds/ZOMBIE - Growl - Low - 01 - Humanoid Monster Voice    [003265].mp3";
import WinSoundEffect from "../../assets/sounds/achievment_04.mp3";
import LoseSoundEffect from "../../assets/sounds/bomb_01.mp3";

class BattleGround extends React.Component {
  state = {
    game: {
      over: false,
      win: false,
      winSound: new Audio(WinSoundEffect),
      loseSound: new Audio(LoseSoundEffect),
    },
    boss: {
      alive: true,
      name: "Kalzgar The Lizard King",
      health: 10000,
      dmg: 20,
      maxHp: 10000,
    },
    healer: {
      alive: true,
      name: "Ali Caster",
      health: 50,
      maxHp: 50,
      dmg: 3,
      mp: 30,
      maxMp: 30,
      cooldown: 5,
    },
    dps: {
      alive: true,
      name: "Balicoven",
      health: 60,
      maxHp: 60,
      dmg: 10,
      ultMulit: 10,
      cooldown: 5,
    },
    tank: {
      alive: true,
      name: "KorTak",
      health: 250,
      dmg: 5,
      maxHp: 250,
      cooldown: 5,
    },
    atkSound: new Audio(ClickSound),
    sound: new Audio(Sound),
    sound1: new Audio(Sound1),
    sound2: new Audio(Sound2),
  };

  componentDidMount() {
    this.setFrames();
    const healButton = document.getElementById("healer");
    healButton.addEventListener("click", this.abillityHeal);
    const tauntButton = document.getElementById("tank");
    tauntButton.addEventListener("click", this.abillityTaunt);
    const boss = document.getElementById("boss");
    boss.addEventListener("click", this.abillityAtk);
    const ultButton = document.getElementById("dps");
    ultButton.addEventListener("click", this.abillityUlt);
  }

  setFrames = () => {
    setInterval(this.gameLoop, 5000);
    setInterval(this.regenMp, 1000);
  };

  gameLoop = () => {
    setTimeout(this.bossTurn, 0);
    setTimeout(this.tankTurn, 2000);
  };

  regenMp = () => {
    if (
      this.state.healer.mp < this.state.healer.maxMp &&
      this.state.healer.alive == true
    ) {
      const healerCopy = this.state.healer;
      this.setState({
        healer: { ...healerCopy, mp: this.state.healer.mp + 1 },
      });
    }
  };

  dealDmg = (from, to) => {
    document.getElementById(`${from}`).classList.add("jump");
    document.getElementById(`${to}`).classList.add("hit");
    const toCopy = this.state[to];
    this.setState({
      [to]: {
        ...toCopy,
        health: this.state[to].health - this.state[from].dmg,
      },
    });
    if (this.state[to].health <= 0) {
      document.getElementById(`${to}`).classList.remove(`${to}`);
      document.getElementById(`${to}`).classList.add(`${to}-dead`);
      this.setState({
        [to]: {
          ...toCopy,
          alive: false,
          health: 0,
        },
      });
    }
    setTimeout(() => {
      document.getElementById(`${from}`).classList.remove("jump");
      document.getElementById(`${to}`).classList.remove("hit");
    }, 500);
  };

  bossTurn = () => {
    if (this.state.tank.alive == true) {
      this.dealDmg("boss", "tank");
    } else if (this.state.dps.alive == true) {
      this.dealDmg("boss", "dps");
    } else if (this.state.healer.alive == true) {
      document.getElementById(`boss`).classList.add("jump");
      document.getElementById(`healer`).classList.add("hit");
      document.getElementById(`healer`).classList.remove("healer");
      document.getElementById(`healer`).classList.add("healer-dead");

      const toCopy = this.state.healer;
      this.setState({
        healer: {
          ...toCopy,
          alive: false,
          health: 0,
          mp: 0,
        },
      });

      setTimeout(() => {
        document.getElementById(`boss`).classList.remove("jump");
        document.getElementById(`healer`).classList.remove("hit");
      }, 500);
    } else {
      this.state.game.loseSound.play();
      this.setState({
        game: {
          win: false,
          over: true,
        },
      });
    }
  };

  tankTurn = () => {
    if (this.bossAlive()) {
      if (this.state.tank.alive == true) {
        document.getElementById(`tank`).classList.add("tank-atk");
        document.getElementById(`tank`).classList.remove("tank");
        this.dealDmg("tank", "boss");
        setTimeout(() => {
          document.getElementById(`tank`).classList.add("tank");
          document.getElementById(`healer`).classList.remove("tank-atk");
        }, 500);
      } else {
      }
    } else {
      this.setState({
        game: {
          win: true,
          over: true,
        },
      });
      this.state.game.winSound.play();
    }
  };

  abillityAtk = () => {
    this.state.atkSound.play();
    document.getElementById("dps").classList.add("dps-atk");
    document.getElementById("dps").classList.remove("dps");
    this.dealDmg("dps", "boss");
    setTimeout(() => {
      document.getElementById("dps").classList.remove("dps-atk");
      document.getElementById("dps").classList.add("dps");
    }, 1000);
  };

  abillityHeal = () => {
    if (this.state.healer.mp - 10 >= 0) {
      //do we have enough mp?
      if (
        this.state.tank.health < this.state.tank.maxHp &&
        this.state.tank.alive
      ) {
        //does the tank need healing?
        document.getElementById("healer").classList.add("healer-heal");
        document.getElementById("healer").classList.remove("healer");
        this.state.sound.play();
        const tankCopy = this.state.tank;
        const healerCopy = this.state.healer;
        this.setState({
          tank: {
            ...tankCopy,
            health:
              this.state.tank.health + 50 > this.state.tank.maxHp
                ? this.state.tank.maxHp
                : this.state.tank.health + 50,
          },
          healer: { ...healerCopy, mp: this.state.healer.mp - 10 },
        });
      }
      if (
        this.state.dps.health < this.state.dps.maxHp &&
        this.state.dps.alive
      ) {
        //does the tank need healing?
        document.getElementById("healer").classList.add("healer-heal");
        document.getElementById("healer").classList.remove("healer");
        this.state.sound.play();
        const toCopy = this.state.dps;
        const healerCopy = this.state.healer;
        this.setState({
          dps: {
            ...toCopy,
            health:
              this.state.tank.health + 50 > this.state.tank.maxHp
                ? this.state.tank.maxHp
                : this.state.tank.health + 50,
          },
          healer: { ...healerCopy, mp: this.state.healer.mp - 10 },
        });
      }
    }

    setTimeout(() => {
      document.getElementById("healer").classList.remove("healer-heal");
      document.getElementById("healer").classList.add("healer");
    }, 1000);
  };

  abillityTaunt = () => {
    console.log("Taunt Button Clicked!");
  };

  bossAlive = () => {
    if (this.state.boss.health <= 0) {
      const toCopy = this.state.boss;
      const gameCopy = this.state.game;
      this.setState({
        boss: { ...toCopy, alive: false },
        game: { ...gameCopy, win: true, over: true },
      });
      this.state.game.winSound.play();
    }
    console.log(this.state.boss.alive);
    return this.state.boss.alive;
  };

  abillityUlt = () => {
    this.bossAlive();
    document.getElementById("dps").classList.add("spin");
    document.getElementById("boss").classList.add("hit");
    const bossCopy = this.state.boss;
    this.setState({
      boss: {
        ...bossCopy,
        health:
          this.state.boss.health - this.state.dps.dmg * this.state.dps.ultMulit,
      },
    });
    setTimeout(() => {
      document.getElementById("dps").classList.remove("spin");
      document.getElementById("boss").classList.remove("hit");
    }, 1000);
    console.log("Ult Button Clicked!");
  };

  render() {
    return (
      <>
        {this.state.game.over ? (
          <>
            <GameOver win={this.state.game.win} />
          </>
        ) : (
          <div className="castle" id="background">
            <BattleHeader
              health={this.state.boss.health}
              maxHp={this.state.boss.maxHp}
              name={this.state.boss.name}
            />
            <div id="boss-box" style={{ margin: "0" }}>
              <Boss />
            </div>
            <div className="party row" style={{ width: "100%" }}>
              <div className="col-4">
                <Dps
                  hp={this.state.dps.health}
                  maxHp={this.state.dps.maxHp}
                  name={this.state.dps.name}
                />
              </div>
              <div className="col-4">
                <Tank
                  maxHp={this.state.tank.maxHp}
                  health={this.state.tank.health}
                  name={this.state.tank.name}
                />
              </div>
              <div className="col-4">
                <Healer
                  hp={this.state.healer.health}
                  maxHp={this.state.healer.maxHp}
                  mp={this.state.healer.mp}
                  maxMp={this.state.healer.maxMp}
                  name={this.state.healer.name}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default BattleGround;
