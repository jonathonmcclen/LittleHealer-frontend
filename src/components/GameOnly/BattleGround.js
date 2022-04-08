import React from "react";
import BattleHeader from "./BattleHeader";
import Tank from "./Tank";
import Dps from "./Dps";
import Healer from "./Healer";
import Boss from "./Boss";

//sounds
import ClickSound from "../../assets/sounds/Bamboo_Spell_Attack_One_Shot_v2.wav";
import Sound from "../../assets/sounds/Devil_Stab_Cast_Sword.wav";
import Sound1 from "../../assets/sounds/Sword-Attack_Swoosh_Swipe-1C.wav";
import Sound2 from "../../assets/sounds/ZOMBIE - Growl - Low - 01 - Humanoid Monster Voice    [003265].mp3";

class BattleGround extends React.Component {
  state = {
    gmae: {
      won: false,
      over: false,
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
    },
    dps: {
      alive: true,
      name: "Balicoven",
      health: 60,
      maxHp: 60,
      dmg: 10,
      ultMulit: 10,
    },
    tank: { alive: true, name: "KorTak", health: 250, dmg: 5, maxHp: 250 },
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
    if (this.state.healer.mp < this.state.healer.maxMp) {
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
      const toCopy = this.state.healer;
      this.setState({
        healer: {
          ...toCopy,
          alive: false,
          health: 0,
        },
      });
      setTimeout(() => {
        document.getElementById(`boss`).classList.remove("jump");
        document.getElementById(`healer`).classList.remove("hit");
      }, 500);
    }
  };

  tankTurn = () => {
    document.getElementById(`tank`).classList.add("tank-atk");
    document.getElementById(`tank`).classList.remove("tank");
    if (this.state.tank.alive == true) {
      this.dealDmg("tank", "boss");
    }
    setTimeout(() => {
      document.getElementById(`tank`).classList.add("tank");
      document.getElementById(`healer`).classList.remove("tank-atk");
    }, 500);
  };

  abillityAtk = () => {
    this.state.atkSound.play();
    this.dealDmg("dps", "boss");
  };

  abillityHeal = () => {
    document.getElementById("healer").classList.add("spin");
    if (this.state.healer.mp - 10 >= 0) {
      //do we have enough mp?
      if (
        this.state.tank.health < this.state.tank.maxHp &&
        this.state.tank.alive == true
      ) {
        //does the tank need healing?
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
    }

    setTimeout(() => {
      document.getElementById("healer").classList.remove("spin");
    }, 1000);
  };

  abillityTaunt = () => {
    console.log("Taunt Button Clicked!");
  };

  abillityUlt = () => {
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
      <div className="tall-rocks" id="background">
        <BattleHeader
          health={this.state.boss.health}
          maxHp={this.state.boss.maxHp}
          name={this.state.boss.name}
        />
        <div className="row" id="boss-box">
          <Boss />
        </div>
        <div className="party row">
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
    );
  }
}

export default BattleGround;
