import React, { Component } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    console.log(this.state);
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

  addNewCharacter = e => {
    e.preventDefault();
    const starwarsChars = this.state.starwarsChars;
    starwarsChars.push({character: this.getCharacters});
    this.setState({starwarsChars});
  
}
  

  // this.setState({ characters})

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <DisplayCard 
        handleNewCharacter={this.addNewCharacter}
        />
      </div>
    );
  }
}

export default App;
