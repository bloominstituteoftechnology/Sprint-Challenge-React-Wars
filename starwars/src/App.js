import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: 0,
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // change the currently selected character
  pickHandler = (event, index) => {
    this.setState({currentChar: index});
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars!</h1>

        <div className="container">
          <CharacterList charList={this.state.starwarsChars} controller={this} />
          <CharacterCard charList={this.state.starwarsChars}
                         currentChar={this.state.currentChar} controller={this} />
        </div>
      </div>
    );
  }
}

export default App;
