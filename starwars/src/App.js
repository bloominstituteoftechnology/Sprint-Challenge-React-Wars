import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard/StarWarsCard'

const images = [ 
  './components/StarWarsCard/images/luke_skywalker.jpeg',
  './components/StarWarsCard/images/C-3PO.jpeg',
  './components/StarWarsCard/images/R2-D2.jpeg',
  './components/StarWarsCard/images/darth_vader.jpeg',
  './components/StarWarsCard/images/darth_vader.jpeg',
  './components/StarWarsCard/images/leio_organa.jpeg',
  './components/StarWarsCard/images/owen_lars.jpeg',
  './components/StarWarsCard/images/beru_lars.jpeg',
  './components/StarWarsCard/images/R5-D4.jpeg',
  './components/StarWarsCard/images/biggs_darklighter.jpeg',
  './components/StarWarsCard/images/obi-wan_kenobi.jpeg',
]

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
      .then( () => {
        const { starwarsChars } = this.state;
        console.log(starwarsChars);
        starwarsChars.map( (obj, index) => {
          return obj.image = images[index];
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  
  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="StarWarsDeck">
          {this.state.starwarsChars.map((char, index) => {
            return <StarWarsCard char={char} key={index}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;