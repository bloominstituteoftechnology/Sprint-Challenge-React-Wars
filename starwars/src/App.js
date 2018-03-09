import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
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
  };

  render() {
    const {
      starwarsChars
    } = this.state

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ol>
          {starwarsChars.map(character => (
            <Collapsible trigger={character.name}>
              <ul>
                <li>Birth year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Height: {character.height}</li>


              </ul>
            </Collapsible>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
