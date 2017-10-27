import React, { Component } from 'react';
import './Charcard.css';
// import Navbar from '../navbar/Navbar.js';
import ReactDOM from 'react-dom';

class CharCard extends Component {
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
    return this.state.starwarsChars.map(char => {
    return (
      <div className="charCard">
        <div className = "charName">
          {char.name}
        </div>
        <div className = "charHeight">
          Height: {char.height}
        </div>
        <div className = "charMass">
          Mass: {char.mass}
        </div>
        <div className = "charHairColor">
          Hair Color: {char.hair_color}
        </div>
        <div className = "charEyeColor">
          Eye Color: {char.eye_color}
        </div>
        <div className = "charBirthYear">
          Birth Year: {char.birth_year}
        </div>
        <div className = "charGender">
          Gender: {char.gender}
        </div>
      </div>
    );
  })
  }
}

export default CharCard;