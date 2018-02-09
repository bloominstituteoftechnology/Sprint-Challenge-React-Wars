import React, { Component } from 'react';
import './styles/App.css';
import Card from "./components/cards.js";

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
      <div className="container">
        <div className="container__logo">
          <img id="logo" alt="logo" src="https://fontmeme.com/temporary/3fc74d86a5441775b53387fc5dcca95a.png" />
        </div>
        <div className="App__cards">
          {this.state.starwarsChars.map(obj => <Card chars={obj} />)}
        </div>
      </div>
    );
  }
}

export default App;