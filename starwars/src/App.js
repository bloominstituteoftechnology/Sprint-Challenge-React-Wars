import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './CharacterList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsChars: []
    };
  }
  componentDidMount() {
    let promise = axios.get('https://swapi.co/api/people');
    promise
      .then(response => {
        console.log(response.data.results);
        this.setState({ starWarsChars: response.data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {

    const { starWarsChars } = this.state;
      return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList chars = {starWarsChars} />
      </div>
    );
  }
}

export default App;
