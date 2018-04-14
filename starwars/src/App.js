import React, { Component } from 'react';
import './App.css';
import Character from './Components/Character/Character.js';
import Age from './Components/Age/Age.js';



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

    const characters = this.state.starwarsChars.map((c, key) => {
      return <Character info={c} key={key}/>
    }) 

    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters </h1>
        {characters}
      </div>
    );
  }
}

export default App;
