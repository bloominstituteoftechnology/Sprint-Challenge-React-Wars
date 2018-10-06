import React, { Component } from "react";
import Characters from "./components/characters";
import Buttons from "./components/buttons";
import Splash from "./components/splash";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.charHistory = [];
    this.state = {
      starwarsChars: [],
      sortParams: ["All", "Skywalkers", "Not Skywalkers", "Humans", "Droids"],
      pageDisplay: false
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  isSkywalker = () => {
    let chars = this.state.starwarsChars;
    if (Object.keys(chars).includes("skywalker")) {
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      if (chars[i].skywalker === false || chars[i].skywalker === true) {
      } else if (
        chars[i].gender === "n/a" ||
        chars[i].name === "Biggs Darklighter" ||
        chars[i].name === "Obi-Wan Kenobi"
      ) {
        chars[i].skywalker = false;
      } else {
        chars[i].skywalker = true;
      }
    }
    this.setState({ starwarsChars: chars });
  };

  addPicture = () => {
    let chars = this.state.starwarsChars;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i].name === "Luke Skywalker") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/Lightsaber_853fb596.jpeg?region=178%2C0%2C813%2C812&width=320";
        chars[i].url = "https://www.starwars.com/databank/luke-skywalker";
        chars[i].darkside = false;
      }
      if (chars[i].name === "C-3PO") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=353%2C0%2C791%2C793&width=320";
        chars[i].url = "https://www.starwars.com/databank/c-3po";
        chars[i].darkside = false;
      }
      if (chars[i].name === "R2-D2") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=549%2C0%2C864%2C864&width=320";
        chars[i].url = "https://www.starwars.com/databank/r2-d2";
        chars[i].darkside = false;
      }
      if (chars[i].name === "Darth Vader") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=236%2C0%2C928%2C928&width=320";
        chars[i].url = "https://www.starwars.com/databank/darth-vader";
        chars[i].darkside = true;
      }
      if (chars[i].name === "Leia Organa") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=151%2C0%2C720%2C720&width=320";
        chars[i].url = "https://www.starwars.com/databank/leia-organa";
        chars[i].darkside = false;
      }
      if (chars[i].name === "Owen Lars") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=230%2C0%2C878%2C878&width=320";
        chars[i].url = "https://www.starwars.com/databank/owen-lars";
        chars[i].darkside = false;
      }

      if (chars[i].name === "Beru Whitesun lars") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=76%2C0%2C877%2C878&width=320";
        chars[i].url = "https://www.starwars.com/databank/beru-lars";
        chars[i].darkside = false;
      }

      if (chars[i].name === "R5-D4") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=601%2C0%2C667%2C666&width=320";
        chars[i].url = "https://www.starwars.com/databank/r5-d4";
        chars[i].darkside = false;
      }

      if (chars[i].name === "Biggs Darklighter") {
        chars[i].img =
          "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406";
        chars[i].url = "https://www.starwars.com/databank/biggs-darklighter";
        chars[i].darkside = false;
      }

      if (chars[i].name === "Obi-Wan Kenobi") {
        chars[i].img =
          "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=149%2C0%2C864%2C864&width=320";
        chars[i].url = "https://www.starwars.com/databank/obi-wan-kenobi";
        chars[i].darkside = false;
      }
    }
  };

  addProfiles = () => {
    let newEntries = [
      {
        img:
          "https://lumiere-a.akamaihd.net/v1/images/Emperor-Palpatine_7ac4a10e.jpeg?region=311%2C0%2C900%2C900&width=320",
        name: "Emperor Palpatine",
        url:
          "https://www.starwars.com/databank/emperor-palpatine-darth-sidious",
        gender: "male",
        skywalker: false,
        darkside: true
      },
      {
        name: "Darth Maul",
        gender: "Dathomirian male",
        skywalker: false,
        darkside: true,
        img:
          "https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=433%2C47%2C853%2C853&width=320",
        url: "https://www.starwars.com/databank/darth-maul"
      },
      {
        name: "Count Dooku",
        gender: "male",
        skywalker: false,
        darkside: true,
        img:
          "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=257%2C0%2C807%2C808&width=320",
        url: "https://www.starwars.com/databank/count-dooku"
      },
      {
        name: "Yoda",
        gender: "unknown male",
        skywalker: false,
        darkside: false,
        img:
          "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=461%2C0%2C864%2C864&width=320",
        url: "https://www.starwars.com/databank/yoda"
      },
      {
        name: "General Grievous",
        gender: "n/a",
        skywalker: false,
        darkside: true,
        url: "https://www.starwars.com/databank/general-grievous",
        img:
          "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg?region=331%2C0%2C675%2C675&width=320"
      },
      {
        name: "Kylo Ren",
        gender: "male",
        skywalker: true,
        darkside: true,
        img:
          "https://lumiere-a.akamaihd.net/v1/images/kylo-ren-db-main_e2e6f666.jpeg?region=347%2C0%2C878%2C878&width=320",
        url: "https://www.starwars.com/databank/kylo-ren"
      }
    ];
    let chars = this.state.starwarsChars;
    chars = chars.concat(newEntries);
    this.setState({
      starwarsChars: chars.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  };

  updateCharHistory = () => {
    if (this.charHistory.length) {
      return;
    }
    this.charHistory.push(Object.assign([], this.state.starwarsChars));
  };

  sort = e => {
    let button = e.target.innerText;
    let storedChars = this.charHistory[0];
    let sortedChars;
    if (button === "All") {
      sortedChars = storedChars;
    }
    if (button === "Skywalkers") {
      sortedChars = storedChars.filter(char => char.skywalker);
    }
    if (button === "Not Skywalkers") {
      sortedChars = storedChars.filter(char => !char.skywalker);
    }
    if (button === "Humans") {
      sortedChars = storedChars.filter(
        char => char.gender === "male" || char.gender === "female"
      );
    }
    if (button === "Droids") {
      sortedChars = storedChars.filter(char => char.gender === "n/a");
    }

    this.setState({ starwarsChars: sortedChars });
    console.log(this.state);
  };

  displayToggle = () => {
    this.isSkywalker();
    this.addPicture();
    this.setState({ pageDisplay: true });
    this.updateCharHistory();
    console.log(this.state);
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        this.addProfiles();
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className={this.state.pageDisplay ? "hide" : ""}>
          <Splash displayToggle={this.displayToggle} />
        </div>

        <div className={this.state.pageDisplay ? "" : "hide"}>
          <Buttons params={this.state.sortParams} sort={this.sort} />
          <Characters chars={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
