import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

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
    // sort of eventlistener, whatever is inside is called whenever the component is mounted
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
    return <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className = "card">
        {this.state.starwarsChars.map((element, index) => ( //element is the starwarschar
          <CharacterCard key={index} element = {element} />
          ))}
      </div>
      </div>;
  }
}

export default App;
