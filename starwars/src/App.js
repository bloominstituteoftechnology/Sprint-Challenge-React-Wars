import React, { Component } from 'react';
import './App.css';
import CardFactory from "./CardFactory/CardFactory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
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
    const copy = [...this.state.starwarsChars]
    return (
      <div className="App">
        {console.log(copy)}
        <h1 className="Header">React Wars</h1>
        <div className="characterContainer">
          {copy.map((character, index) => (<CardFactory character={character} key={index} />))}
        </div>
      </div>
    );
  }
}

export default App;
