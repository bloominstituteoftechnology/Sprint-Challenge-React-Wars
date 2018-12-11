import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/characterComponent/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 'https://swapi.co/api/people/'
    };
  }


  componentDidMount() {
    this.getCharacters(this.state.currentPage);
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
        console.log(data);
        this.setState({ starwarsChars: data.results});
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="Header">React Wars</h1>
        <CharacterCard 
          character={this.state.starwarsChars}
        />
        </div>
      </div>
    );
  }
}

export default App;
