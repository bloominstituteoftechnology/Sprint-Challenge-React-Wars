import React, { Component } from 'react';

/*
{name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
birth_year
:
"19BBY"
created
:
"2014-12-09T13:50:51.644000Z"
edited
:
"2014-12-20T21:17:56.891000Z"
eye_color
:
"blue"
films
:
(5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
gender
:
"male"
hair_color
:
"blond"
height
:
"172"
homeworld
:
"https://swapi.co/api/planets/1/"
mass
:
"77"
name
:
"Luke Skywalker"
skin_color
:
"fair"
species
:
["https://swapi.co/api/species/1/"]
starships
:
(2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
url
:
"https://swapi.co/api/people/1/"
vehicles
:
(2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
__proto__
:
Obj
*/

export default class SwCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.character.name,
      birth_year: this.props.character.birth_year,
      eye_color: this.props.character.eye_color,
      hair_color: this.props.character.hair_color,
      height: this.props.character.height,
      mass: this.props.character.mass,
      skin_color: this.props.character.skin_color
    });
  }
  covertHeight(h) {
      const i = Math.round(h / 2.54)
      const f = (i - (i % 12))/12
      const inches = i % 12
      if (!inches) {
          return `${f} ft`
      }
      if (inches === 1) {     
        return `${f} ft 1 inch`
      }
      return `${f} ft ${inches} inches`
  }
  render() {
    let eye_styles = {
      color: this.state.eye_color,
      backgroundColor: this.state.eye_color === 'yellow' ? 'black' : 'white'
    }
    let hairColor
    switch(this.state.hair_color) {
        case 'blond':  hairColor={color: '#FAF0BE', bg: 'black' }; break
        case 'none':
        case 'n/a': hairColor={color: 'blue'};break
        case 'brown, grey': hairColor={color: 'rgb(148,85,85)'}; break
        case 'auburn, white': hairColor={color: 'rgb(130,54,51)'}; break
        default: hairColor={color: this.state.hair_color}
    }
    let hair_styles = {
      color: hairColor.color,
      backgroundColor: hairColor.bg === undefined ? 'white' : hairColor.bg
    }
    //console.log('mass:', this.state.mass);
    return (
      <div className='card'>
        <h2>{this.state.name}</h2>
        <div>
          <div className="card__inline">born: {this.state.birth_year}</div>
          <div className="card__inline" style={eye_styles}>Eye Color: {this.state.eye_color}</div>
          <div className="card__inline" style={hair_styles}>Hair Color: {this.state.hair_color}</div>
          <div className="card__inline">Height {this.covertHeight(this.state.height)}</div>
          <div className="card__inline">Weight {Math.round(this.state.mass * 2.20462)}lbs</div>
          <div className="card__inline">Skin Color {this.state.skin_color}</div>
        </div>
      </div>
    );
  }
}
