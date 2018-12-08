import React, { Component } from 'react';
import CardContainer from './components/CardContainer';

import luke from './img/luke.jpg';
import c3po from './img/c-3po.jpg';
import r2d2 from './img/r2-d2.jpg';
import darth from './img/darth.jpg';
import leia from './img/leia.jpg';
import owen from './img/owen.jpg';
import beru from './img/beru.jpg';
import r5d4 from './img/r5-d4.jpg';
import biggs from './img/biggs.png';
import obiwan from './img/obi-wan.jpg';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      img: [luke, c3po, r2d2, darth, leia, owen, beru, r5d4, biggs, obiwan]
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
    event.currentTarget.classList.toggle('large-card');
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Rebel Alliance Database</h1>
        <h2 className="Sub-Header">DataBase ID Cards</h2>
        <CardContainer char={this.state.starwarsChars} enlargeCard={this.enlargeCard.bind(this)} imgs={this.state.img}/>
      </div>
    );
  }
}

export default App;
