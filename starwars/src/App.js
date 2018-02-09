import React, { Component } from 'react';
import People from './People';
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
        <h1 className="Header">React Wars</h1>
        <div className="character-container" style={containerStyle}>
          {this.state.starwarsChars.map((character, i) => <People key={i} character={character}/>)}
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: 'flex', 
  flexWrap:'wrap', 
  justifyContent:'center'
}

export default App;
