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
   console.log(this.getCharacters('https://swapi.co/api/people/'));

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
        console.log(data.results);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map(char => (
          <div className="char" key={char.created}>
          <h2 className="name">Name: {char.name}</h2>
          <h3 className="age">Born: `{char.birth_year}`</h3>
          </div>
        ))};
      </div>
    );
  }
}

export default App;
