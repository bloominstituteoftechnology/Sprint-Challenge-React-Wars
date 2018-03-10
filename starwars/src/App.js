import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard/StarWarsCard'

const images = [ 
  './images/luke_skywalker.jpeg',
  './images/C-3PO.jpeg',
  './images/R2-D2.jpeg',
  './images/darth_vader.jpeg',
  './images/darth_vader.jpeg',
  './images/leio_organa.jpeg',
  './images/owen_lars.jpeg',
  './images/beru_lars.jpeg',
  './images/R5-D4.jpeg',
  './images/biggs_darklighter.jpeg',
  './images/obi-wan_kenobi.jpeg',
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
        this.setState({ starwarsChars: starwarsChars });
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