import React, { Component } from 'react';
import './styles/App.css';
import Cards from "./components/cards.js";

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
      <div className="App">
        <img id="logo" src="https://fontmeme.com/temporary/3fc74d86a5441775b53387fc5dcca95a.png" />
        <Cards chars={this.state.starWarsChars}/>
      </div>
    );
  }
}

export default App;
