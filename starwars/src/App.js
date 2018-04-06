import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './StarWarsCard/StarWarsCard.js';
import { Container } from 'reactstrap';
import Luke from './Images/Luke.jpg'
import C3PO from './Images/C3PO.jpg'
import R2D2 from './Images/R2D2.jpg'
import Vader from './Images/Vader.jpg'
import Leia from './Images/Leia.jpg'
import Owen from './Images/Owen.jpg'
import Beru from './Images/Beru.jpg'
import R5D4 from './Images/R5D4.jpg'
import Biggs from './Images/Biggs.jpg'
import Obi from './Images/Obi.jpg'
const images = [
  Luke,
  C3PO,
  R2D2,
  Vader,
  Leia,
  Owen,
  Beru,
  R5D4,
  Biggs,
  Obi
];


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
        <h1 className="Header">React Wars</h1>
        <div className="StarWarsDeck">
          {this.state.starwarsChars.map((char, index) => {
            return <StarWarsCard char={char} key={index} image={images[index]}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
