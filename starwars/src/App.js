import React, { Component } from 'react';
import CharacterPresenter from "./components/CharacterPresenter";
import PageChange from "./components/PageChange";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
        console.log(data.next);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  prevCharacters = event => {
    event.preventDefault();
    this.getCharacters('https://swapi.co/api/people');
  }
  nextCharacters = event => {
    event.preventDefault();
    this.getCharacters("https://swapi.co/api/people/?page=2");
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <PageChange
                starwarsChars={this.state.starwarsChars}
                prevCharacters={this.prevCharacters}
                nextCharacters={this.nextCharacters}
              />
          <div className="Container">
            <CharacterPresenter 
              starwarsChars={this.state.starwarsChars}
               
            />
          </div>
      </div>
    );
  }
}

export default App;
