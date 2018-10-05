import React, { Component } from 'react';
import './App.css';

import Character from './components/Character/Character';

import BeruLars from './components/Character/img/BeruLars.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsImages: [
        {
          url: "https://swapi.co/api/people/1/",
          image: "https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/cute.jpg"
        },
        {
          url: "https://swapi.co/api/people/2/",
          image: "../src/components/Character/img/C-3PO.jpeg"
        },
        {
          url: "https://swapi.co/api/people/3/",
          image: "./img/R2-D2.jpg"
        },
        {
          url: "https://swapi.co/api/people/4/",
          image: "./img/DarthVader.jpg"
        },
        {
          url: "https://swapi.co/api/people/5/",
          image: "./img/LeiaOrgana.png"
        },
        {
          url: "https://swapi.co/api/people/6/",
          image: "./img/OwenLars.png"
        },
        {
          url: "https://swapi.co/api/people/7/",
          image: BeruLars
        },
        {
          url: "https://swapi.co/api/people/8/",
          image: "./img/R5-D4.jpeg"
        },
        {
          url: "https://swapi.co/api/people/9/",
          image: "./img/BiggsDarklighter.jpg"
        },
        {
          url: "https://swapi.co/api/people/10/",
          image: "./img/ObiWanKenobi.png"
        }
      ]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.addImages();
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

  addImages = () => {
    let characterHolder = this.state.starwarsChars;
    characterHolder.map((character) => {
      character.image = (this.state.starwarsImages.find((image) => image.url === character.url)).image;
    });
    this.setState(() => ({ starwarsChars: characterHolder }));
  }

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
