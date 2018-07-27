import React, { Component } from 'react';
import CardsList from './components/CardsList.js';
import Overlay from './components/Overlay.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      overlay: true,
      show: true
    };
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

  handleOverlayClick=()=>{
    let chars = this.state.starwarsChars.slice();
    chars.forEach(char => {return char.show=false});
    chars[0].show=true;
    console.log(chars[0]);
    this.setState(prevState => {
      return {overlay: !this.state.overlay}
    });
  }

  render() {
    return (
      <div className="App">
        <Overlay overlay={this.state.overlay} overlayClick={this.handleOverlayClick} />
        <h1 className="Header">React Wars</h1>
        <CardsList array={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
