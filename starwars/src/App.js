import React, { Component } from 'react';
import './App.css';
import CharBios from './Components/CharBios.js';
import CharList from './Components/CharList'; 
import { Button, Jumbotron } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };

      this.componentDidMount = this.componentDidMount.bind(this);
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
    const {starwarsChars} = this.state;
    return (
      <div className="App">
      <Jumbotron className="jumbotron">
        <h1 className="Header"></h1>
        </Jumbotron>
        <CharList starwarsChars={starwarsChars} />
      </div>
    );
  }
}

export default App;
