import React, { Component } from 'react';
import './App.css';

import Character from './components/Character/Character';

import BeruLars from './components/Character/img/BeruLars.jpg';
import BiggsDarklighter from './components/Character/img/BiggsDarklighter.jpg';
import C3PO from './components/Character/img/C-3PO.jpeg';
import DarthVader from './components/Character/img/DarthVader.jpg';
import LeiaOrgana from './components/Character/img/LeiaOrgana.jpg';
import LukeSkywalker from './components/Character/img/LukeSkywalker.png';
import ObiWanKenobi from './components/Character/img/ObiWanKenobi.jpeg';
import OwenLars from './components/Character/img/OwenLars.png';
import R2D2 from './components/Character/img/R2-D2.jpg';
import R5D4 from './components/Character/img/R5-D4.jpeg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsImages: [
        {
          url: "https://swapi.co/api/people/1/",
          image: LukeSkywalker
        },
        {
          url: "https://swapi.co/api/people/2/",
          image: C3PO
        },
        {
          url: "https://swapi.co/api/people/3/",
          image: R2D2
        },
        {
          url: "https://swapi.co/api/people/4/",
          image: DarthVader
        },
        {
          url: "https://swapi.co/api/people/5/",
          image: LeiaOrgana
        },
        {
          url: "https://swapi.co/api/people/6/",
          image: OwenLars
        },
        {
          url: "https://swapi.co/api/people/7/",
          image: BeruLars
        },
        {
          url: "https://swapi.co/api/people/8/",
          image: R5D4
        },
        {
          url: "https://swapi.co/api/people/9/",
          image: BiggsDarklighter
        },
        {
          url: "https://swapi.co/api/people/10/",
          image: ObiWanKenobi
        }
      ]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    //this.addImages();
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
        this.setState(() => ({ starwarsChars: data.results }));
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // addImages = () => {
  //   let characterHolder = this.state.starwarsChars;
  //   characterHolder.map((character) => {
  //     character.image = (this.state.starwarsImages.find((image) => image.url === character.url)).image;
  //   });
  //   this.setState(() => ({ starwarsChars: characterHolder }));
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((character, index) => {
          return <Character key={character.url} character={this.state.starwarsChars[index]} characterImage={this.state.starwarsImages.find((image) => character.url === image.url).image} />
          })};
      </div>
    );
  }
}

export default App;
