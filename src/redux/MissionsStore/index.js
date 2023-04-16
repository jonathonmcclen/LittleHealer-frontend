import { FETCH_MISSIONS, FETCH_SUCCESS, FETCH_FAIL } from "./ActionTypes";

const initState = {
  Missions: [{
    "id": 1,
    "name": "Hunting",
    "bosses": [
      {
        "id": 1,
        "mission_id": 1,
        "name": "bela-shim Wild Cat",
        "health": 1000,
        "armor": null,
        "health_regen": null,
        "attack_power": 10,
        "attack_speed": null,
        "exp": null,
        "css_class": "crecent-wild-cat",
        "bg": "forrest-tree"
      },
      {
        "id": 2,
        "mission_id": 1,
        "name": "Hungy Wolf The Like",
        "health": 4000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "wolf",
        "bg": "green-woods"
      },
      {
        "id": 3,
        "mission_id": 1,
        "name": "Boom-Ba the Thunder Boar",
        "health": 10000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "thunder-bore",
        "bg": "basic-green"
      },
      {
        "id": 4,
        "mission_id": 1,
        "name": "DaeGo Saber Cat",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 30,
        "attack_speed": null,
        "exp": null,
        "css_class": "theo-saber-cat",
        "bg": "cold-ruins"
      },
      {
        "id": 5,
        "mission_id": 1,
        "name": "Dawn Ram",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 25,
        "attack_speed": null,
        "exp": null,
        "css_class": "mistic-mountains-ram",
        "bg": "blue-mountain-clearing"
      },
      {
        "id": 6,
        "mission_id": 1,
        "name": "Kackel Dog Grim",
        "health": 20000,
        "armor": null,
        "health_regen": null,
        "attack_power": 40,
        "attack_speed": null,
        "exp": null,
        "css_class": "kackle",
        "bg": "castle-cortyard"
      },
      {
        "id": 7,
        "mission_id": 1,
        "name": "Silver Crest Gorilla Mogo",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "silver-back",
        "bg": "misty-jungle"
      },
      {
        "id": 8,
        "mission_id": 1,
        "name": "Fernand The Hater of Red",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "ferdinand",
        "bg": "blue-rocks"
      },
      {
        "id": 9,
        "mission_id": 1,
        "name": "Overgrown Kodiack Bella",
        "health": 35000,
        "armor": null,
        "health_regen": null,
        "attack_power": 65,
        "attack_speed": null,
        "exp": null,
        "css_class": "kodiack",
        "bg": "grass-world"
      },
      {
        "id": 10,
        "mission_id": 1,
        "name": "Ivory Tusk: Stompy",
        "health": 60000,
        "armor": null,
        "health_regen": null,
        "attack_power": 80,
        "attack_speed": null,
        "exp": null,
        "css_class": "ivory-tusk",
        "bg": "snow"
      }
    ]
  },
  {
    "id": 2,
    "name": "Shadow Army",
    "bosses": [
      {
        "id": 11,
        "mission_id": 2,
        "name": "Tok",
        "health": 1000,
        "armor": null,
        "health_regen": null,
        "attack_power": 10,
        "attack_speed": null,
        "exp": null,
        "css_class": "tok",
        "bg": "forrest-tree"
      },
      {
        "id": 12,
        "mission_id": 2,
        "name": "shadow elf assassin",
        "health": 4000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "shadow-elf-assassin",
        "bg": "green-woods"
      },
      {
        "id": 13,
        "mission_id": 2,
        "name": "ruin-sentinal",
        "health": 10000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "ruin-sentinal",
        "bg": "basic-green"
      },
      {
        "id": 14,
        "mission_id": 2,
        "name": "cave-crawler",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 30,
        "attack_speed": null,
        "exp": null,
        "css_class": "cave-crawler",
        "bg": "cold-ruins"
      },
      {
        "id": 15,
        "mission_id": 2,
        "name": "shadow-elf-squire",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 25,
        "attack_speed": null,
        "exp": null,
        "css_class": "shadow-elf-squire",
        "bg": "blue-mountain-clearing"
      },
      {
        "id": 16,
        "mission_id": 2,
        "name": "cave-witch",
        "health": 20000,
        "armor": null,
        "health_regen": null,
        "attack_power": 40,
        "attack_speed": null,
        "exp": null,
        "css_class": "cave-witch",
        "bg": "castle-cortyard"
      },
      {
        "id": 17,
        "mission_id": 2,
        "name": "cave-worm",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "cave-worm",
        "bg": "misty-jungle"
      },
      {
        "id": 18,
        "mission_id": 2,
        "name": "abomination",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "abomination",
        "bg": "blue-rocks"
      },
      {
        "id": 19,
        "mission_id": 2,
        "name": "mounted-shadow-elf",
        "health": 35000,
        "armor": null,
        "health_regen": null,
        "attack_power": 65,
        "attack_speed": null,
        "exp": null,
        "css_class": "mounted-shadow-elf",
        "bg": "grass-world"
      },
      {
        "id": 20,
        "mission_id": 2,
        "name": "cave-king",
        "health": 60000,
        "armor": null,
        "health_regen": null,
        "attack_power": 80,
        "attack_speed": null,
        "exp": null,
        "css_class": "cave-king",
        "bg": "snow"
      }
    ]
  },
  {
    "id": 3,
    "name": "Human Army",
    "bosses": [
      {
        "id": 21,
        "mission_id": 3,
        "name": "human-warrior",
        "health": 1000,
        "armor": null,
        "health_regen": null,
        "attack_power": 10,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-warrior",
        "bg": "forrest-tree"
      },
      {
        "id": 22,
        "mission_id": 3,
        "name": "human-archer",
        "health": 4000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-archer",
        "bg": "green-woods"
      },
      {
        "id": 23,
        "mission_id": 3,
        "name": "human-flail-knight",
        "health": 10000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-flail-knight",
        "bg": "basic-green"
      },
      {
        "id": 24,
        "mission_id": 3,
        "name": "human-crossbow",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 30,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-crossbow",
        "bg": "cold-ruins"
      },
      {
        "id": 25,
        "mission_id": 3,
        "name": "human-monk",
        "health": 20000,
        "armor": null,
        "health_regen": null,
        "attack_power": 40,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-monk",
        "bg": "castle-cortyard"
      },
      {
        "id": 26,
        "mission_id": 3,
        "name": "human-pike-knight",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-pike-knight",
        "bg": "misty-jungle"
      },
      {
        "id": 27,
        "mission_id": 3,
        "name": "human-wizzard",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-wizzard",
        "bg": "blue-rocks"
      },
      {
        "id": 28,
        "mission_id": 3,
        "name": "human-exalted-knight",
        "health": 35000,
        "armor": null,
        "health_regen": null,
        "attack_power": 65,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-exalted-knight",
        "bg": "grass-world"
      },
      {
        "id": 29,
        "mission_id": 3,
        "name": "human-balista",
        "health": 60000,
        "armor": null,
        "health_regen": null,
        "attack_power": 80,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-balista",
        "bg": "snow"
      },
      {
        "id": 30,
        "mission_id": 3,
        "name": "human-mounted-knight",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 25,
        "attack_speed": null,
        "exp": null,
        "css_class": "human-mounted-knight",
        "bg": "blue-mountain-clearing"
      }
    ]
  },
  {
    "id": 4,
    "name": "Lizzard Army",
    "bosses": [
      {
        "id": 31,
        "mission_id": 4,
        "name": "gulper",
        "health": 1000,
        "armor": null,
        "health_regen": null,
        "attack_power": 10,
        "attack_speed": null,
        "exp": null,
        "css_class": "gulper",
        "bg": "forrest-tree"
      },
      {
        "id": 32,
        "mission_id": 4,
        "name": "grarp",
        "health": 4000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "grarp",
        "bg": "green-woods"
      },
      {
        "id": 33,
        "mission_id": 4,
        "name": "lizzard-archer",
        "health": 10000,
        "armor": null,
        "health_regen": null,
        "attack_power": 20,
        "attack_speed": null,
        "exp": null,
        "css_class": "lizzard-archer",
        "bg": "basic-green"
      },
      {
        "id": 34,
        "mission_id": 4,
        "name": "eel-queen",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 30,
        "attack_speed": null,
        "exp": null,
        "css_class": "eel-queen",
        "bg": "cold-ruins"
      },
      {
        "id": 35,
        "mission_id": 4,
        "name": "lizzard-mage",
        "health": 20000,
        "armor": null,
        "health_regen": null,
        "attack_power": 40,
        "attack_speed": null,
        "exp": null,
        "css_class": "lizzard-mage",
        "bg": "castle-cortyard"
      },
      {
        "id": 36,
        "mission_id": 4,
        "name": "lizzard-knight",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "lizzard-knight",
        "bg": "misty-jungle"
      },
      {
        "id": 37,
        "mission_id": 4,
        "name": "wild-spine-horn",
        "health": 25000,
        "armor": null,
        "health_regen": null,
        "attack_power": 50,
        "attack_speed": null,
        "exp": null,
        "css_class": "wild-spine-horn",
        "bg": "blue-rocks"
      },
      {
        "id": 38,
        "mission_id": 4,
        "name": "killer-claw",
        "health": 35000,
        "armor": null,
        "health_regen": null,
        "attack_power": 65,
        "attack_speed": null,
        "exp": null,
        "css_class": "killer-claw",
        "bg": "grass-world"
      },
      {
        "id": 39,
        "mission_id": 4,
        "name": "mounted-lizard-exicutioner",
        "health": 60000,
        "armor": null,
        "health_regen": null,
        "attack_power": 80,
        "attack_speed": null,
        "exp": null,
        "css_class": "mounted-lizard-exicutioner",
        "bg": "snow"
      },
      {
        "id": 40,
        "mission_id": 4,
        "name": "lizzard-king",
        "health": 15000,
        "armor": null,
        "health_regen": null,
        "attack_power": 25,
        "attack_speed": null,
        "exp": null,
        "css_class": "lizzard-king",
        "bg": "blue-mountain-clearing"
      }
    ]
  }
],
  Loading: false,
  Error: "",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, Loading: true };
    case FETCH_SUCCESS:
      return { ...state, Loading: false, Missions: action.missions, Error: "" };
    case FETCH_FAIL:
      return {
        ...state,
        Loading: false,
        Missions: [],
        Errors: "Could not retrieve missions.",
      };
    default:
      return state;
  }
}

export default reducer;
