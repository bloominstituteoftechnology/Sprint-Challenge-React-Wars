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
    this.getCharacters('https://swapi.co/api/people/');
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='Body'>
          {this.state.starwarsChars.map(char => {
            return (
              <div key={char.created} className='Boxes'>
                  <div className='CharName'>{char.name}</div>
                  <div>Born in the year: {char.birth_year}</div>
                  <div>Eye color: {char.eye_color}</div>
                  <div>Sex: {char.gender}</div>
                  <div>Hair color: {char.hair_color}</div>
                  <div>Height: {char.height}</div>
                  <div>Weight: {char.mass}</div>
                  <div className='CharSkin'>Skin color: {char.skin_color}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
