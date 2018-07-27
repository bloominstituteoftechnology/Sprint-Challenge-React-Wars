import React, { Component } from 'react';
import './App.css';
import AllCards from './components/allCards.js';
// import Card from './components/card.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentlyShowing: [],
      next: null,
      previous: null
    };
    // this.init();
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

  init = event => {
    const listCopy = this.state.starwarsChars.slice();
    console.log(listCopy)
    this.setState({currentlyShowing: listCopy})
  }

  showIndividual = event => {
    const listCopy = this.state.starwarsChars.slice();
    let firstItem = [];
    firstItem.push(listCopy[0]);
    this.setState({starwarsChars: firstItem})
  }

  showAll = event => {
    const listCopy = this.state.starwarsChars.slice();
    console.log(listCopy)
    this.setState({starwarsChars: listCopy})
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <AllCards name="Dummy Card" show1={this.showIndividual}
        showAll={this.showAll}
        data={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
