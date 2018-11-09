import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      homeworlds:[]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getOtherLinks('https://swapi.co/api/planets/1/')
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getOtherLinks = URL => {

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.name);
        this.setState({ homeworlds: data.name });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={this.state.starwarsChars}  homeworlds={this.state.homeworlds}/>
      </div>
    );
  }
}

export default App;
