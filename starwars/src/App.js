import React, { Component } from 'react';
import CardContainer from './components/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  enlargeCard = event => {
    event.target.classList.toggle('large-card');
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Rebel Alliance Database</h1>
        <h2 className="Sub-Header">DataBase ID Cards</h2>
        <CardContainer char={this.state.starwarsChars} enlargeCard={this.enlargeCard.bind(this)}/>
      </div>
    );
  }
}

export default App;
