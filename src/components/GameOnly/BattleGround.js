import React from "react";
import BattleHeader from "./BattleHeader";
import Tank from "./Tank";
import Dps from "./Dps";
import Healer from "./Healer";
import Boss from "./Boss";

class BattleGround extends React.Component {
  state = {
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

  bossTurn = () => {
    document.getElementById("boss").classList.add("jump");
    document.getElementById("tank").classList.add("hit");
    const tankCopy = this.state.tank;
    this.setState({
      tank: {
        ...tankCopy,
        health:
          this.state.tank.health - this.state.boss.dmg <= 0
            ? 0
            : this.state.tank.health - this.state.boss.dmg,
      },
    });
    setTimeout(() => {
      document.getElementById("boss").classList.remove("jump");
      document.getElementById("tank").classList.remove("hit");
    }, 500);
  };

  tankTurn = () => {
    document.getElementById("tank").classList.add("jump");
    document.getElementById("boss").classList.add("hit");
    const bossCopy = this.state.boss;
    this.setState({
      boss: {
        ...bossCopy,
        health: this.state.boss.health - this.state.tank.dmg,
      },
    });
    setTimeout(() => {
      document.getElementById("tank").classList.remove("jump");
      document.getElementById("boss").classList.remove("hit");
    }, 500);
  };

  healerTurn = () => {
    if (this.state.tank.health < this.state.tank.maxHp) {
      this.healTank();
    } else if (this.state.dps.health < this.state.dps.maxHp) {
      //heal dps
    }
  };

  healTank = () => {};

  healDps = () => {
    const tankCopy = this.state.boss;
    this.setState({
      tank: {
        ...tankCopy,
        health: this.state.tank.health + this.state.healer.dmg,
      },
    });
  };

  abillityAtk = () => {
    document.getElementById("dps").classList.add("jump");
    document.getElementById("boss").classList.add("hit");
    const bossCopy = this.state.boss;
    this.setState({
      boss: {
        ...bossCopy,
        health: this.state.boss.health - this.state.dps.dmg,
      },
    });
    setTimeout(() => {
      document.getElementById("dps").classList.remove("jump");
      document.getElementById("boss").classList.remove("hit");
    }, 1000);
  };

  abillityHeal = () => {
    document.getElementById("healer").classList.add("spin");
    if (this.state.healer.mp - 10 >= 0) {
      //do we have enough mp?
      if (this.state.tank.health < this.state.tank.maxHp) {
        //does the tank need healing?
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
