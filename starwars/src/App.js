import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="Header">React Wars</div>
        <div className="CharacterCards">
          {this.state.starwarsChars.map((char, i) => {
            return (
              <div key={char.name + i} className="CharCard">
                <div className="CharName" >{char.name}</div>
                <div>Homeworld: <a href={char.homeworld}>Homeworld</a></div>
                <div className="Specs">
                  <div className="Specs_title">Identifyers</div>
                  <div className="Spec_Items">
                    <div className="Spec">Species: <a href={char.species}>Species Info</a></div>
                    <div className="Spec">Gender: {char.gender}</div>
                    <div className="Spec">Height: {char.height}</div>
                    <div className="Spec">Mass: {char.mass}</div>
                    <div className="Spec">Hair Color: {char.hair_color}</div>
                    <div className="Spec">Skin Color: {char.skin_color}</div>
                    <div className="Spec">Eye Color: {char.eye_color}</div>
                    <div className="Spec">Birth Year: {char.birth_year}</div>
                  </div>
                </div>
                <div>Vehicles: {char.vehicles}</div>
                <div>Starships: {char.starships}</div>
                <div>Films: {char.films}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
