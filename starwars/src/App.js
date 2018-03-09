import React, { Component } from 'react';
//import StarWarCharacter from './StarWarCharacter'; //stateful/class component import
import { StarWarCharacter } from './StarWarCharacter'; //stateless/functional/presentational component import
import {Container} from 'reactstrap';
import './App.css';

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
    return (
      <Container className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((character, index) => <StarWarCharacter key={index} character={character}/>)}
      </Container>
    );
  }
}

export default App;
