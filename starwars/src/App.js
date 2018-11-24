import React, { Component } from 'react';
import './App.css';
// import listItems from './components/myData';
// import Character from './components/Character';
import StarWarsList from './components/StarWarsList';
import StarWarsCharacter from './components/StarWarsCharacter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    // this.random = this.random.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getCharacters('https://swapi.co/api/people/?page=2');
    this.getCharacters('https://swapi.co/api/people/?page=3');
    this.getCharacters('https://swapi.co/api/people/?page=4');
    this.getCharacters('https://swapi.co/api/people/?page=5');
    this.getCharacters('https://swapi.co/api/people/?page=6');
    this.getCharacters('https://swapi.co/api/people/?page=7');
    this.getCharacters('https://swapi.co/api/people/?page=8');
    this.getCharacters('https://swapi.co/api/people/?page=9');
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
        // console.log('data', data)
        this.setState({ starwarsChars: [...this.state.starwarsChars, ...data.results]});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
  // console.log('this.state.starwarsChars', this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

          <div>
            <StarWarsList starwarsChars={this.state.starwarsChars}/>
            {/* <StarWarsCharacter /> */}
          </div>
      </div>
    );
  }
}

export default App;
