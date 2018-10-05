import React, { Component } from "react";
import Char from "./components/Char";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //modified the data coming into state by adding a completed property on it
        //to allow for toggling
        let modArr = data.results;
        modArr.forEach(element => {
          element.clicked = "unclicked";
        });

        this.setState({ starwarsChars: modArr });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  toggleClicked = event => {
    event.preventDefault();
    let newArr = this.state.starwarsChars;
    newArr.forEach(function(item) {
      console.log(item.created);
      console.log(event.target.id);
      if (item.created == event.target.id) {
        if (item.clicked === "unclicked") {
          item.clicked = "clicked";
        } else {
          item.clicked = "clicked";
        }
      }
    });

    this.setState({ starwarsChars: newArr });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="char-list">
          {this.state.starwarsChars.map(char => {
            return (
              <Char
                toggleClicked={this.toggleClicked}
                clicked={char.clicked}
                id={char.created}
                charName={char.name}
                charGender={char.gender}
                charBirthYear={char.birth_year}
                charEyes={char.eye_color}
                charHair={char.hair_color}
                charHeight={char.height}
                charMass={char.mass}
                charSkin={char.skin_color}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
