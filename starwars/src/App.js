import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard/StarWarsCard'

import luke from './components/StarWarsCard/images/luke_skywalker.jpeg';
import c3po from './components/StarWarsCard/images/C-3PO.jpeg';
import r2d2 from './components/StarWarsCard/images/R2-D2.jpeg';
import darth_vader from './components/StarWarsCard/images/darth_vader.jpeg';
import darth_vader2 from './components/StarWarsCard/images/darth_vader.jpeg';
import leio_organa from './components/StarWarsCard/images/leio_organa.jpeg';
import owen_lars from './components/StarWarsCard/images/owen_lars.jpeg';
import beru_lars from './components/StarWarsCard/images/beru_lars.jpeg';
import r5d4 from './components/StarWarsCard/images/R5-D4.jpeg';
import biggs_darklighter from './components/StarWarsCard/images/biggs_darklighter.jpeg';
import obiwan from './components/StarWarsCard/images/obi-wan_kenobi.jpeg';

// const images = [ 
//   './images/luke_skywalker.jpeg',
//   './images/C-3PO.jpeg',
//   './images/R2-D2.jpeg',
//   './images/darth_vader.jpeg',
//   './images/leio_organa.jpeg',
//   './images/owen_lars.jpeg',
//   './images/beru_lars.jpeg',
//   './images/R5-D4.jpeg',
//   './images/biggs_darklighter.jpeg',
//   './images/obi-wan_kenobi.jpeg',
// ]

const images = [
  luke,
  c3po,
  r2d2,
  darth_vader,
  leio_organa,
  owen_lars,
  beru_lars,
  r5d4,
  biggs_darklighter,
  obiwan
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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
      // .then( () => {
      //   const { starwarsChars } = this.state;
      //   console.log(starwarsChars);
      //   starwarsChars.map( (obj, index) => {
      //     return obj.image = images[index];
      //   })
      //   this.setState({ starwarsChars: starwarsChars });
      // })
      .catch(err => {
        // throw new Error(err);
        console.log(err);
      });
  }
  
  render() {
    console.log(this.state.starwarsChars);
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