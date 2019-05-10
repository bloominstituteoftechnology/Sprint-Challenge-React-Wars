import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
        {
          birth_year: "placeholder"
          created:"placeholder"
          edited: "placeholder"
          eye_color: "placeholder"
          films: Array[]
          gender: "placeholder"
          hair_color: "placeholder"
          height: "placeholder"
          homeworld: "placeholder"
          mass: "placeholder"
          name: "placeholder"
          skin_color: "placeholder"
          species: Array[]
          starships: Array[]
          url: "placeholder"
          vehicles: Array[]
        }
      ]
      starwarsChars: ''
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
