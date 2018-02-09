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
    //console.log(chars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
          <div className="characters">
            {this.state.starwarsChars.map(char => {
              return (
                <div key={char.created} className="allChars">
                  <div className="info">Name: {char.name}</div>
                  <div className="info">Birth Year: {char.birth_year}</div>
                  <div className="info">Gengder: {char.gender}</div>
                  <div className="info">Height: {char.height}</div>
                  <div className="info">Eye color: {char.eye_color}</div>
                  <div className="info">Skin Color: {char.skin_color}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


