import React, { Component } from 'react';
import Character from './Character';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentWillMount() {
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
      <div>
        <h1 className="Header">React Wars</h1>
        <div className="App">
          {this.state.starwarsChars.map((char, i) => {
            return <Character index={i} name={char.name} height={`${char.height} cm`} weight={`${char.mass} kg`} hair_color={char.hair_color}
              skin_color={char.skin_color} eye_color={char.eye_color} birth_year={char.birth_year} gender={char.gender} 
                homeworld={char.homeworld} films={JSON.stringify(char.films)} species={JSON.stringify(char.species)} 
                  vehicles={JSON.stringify(char.vehicles)} starships={JSON.stringify(char.starships)} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
