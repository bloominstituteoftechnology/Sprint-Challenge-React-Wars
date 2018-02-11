import React, { Component } from 'react';
import './App.css';

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
    const data =this.state.starwarsChars.map(character =>  
       <div className="container"> 
        <div className="character_card">
          <p className="name">{character.name}</p>
          <p className="height"><strong>Height: </strong>{character.height}</p>
          <p className="hair_color"><strong>Hair Color: </strong>{character.hair_color}</p>
          <p className="skin_color"><strong>Skin Color: </strong>{character.skin_color}</p>
          <p className="birth"><strong>Date of Birth: </strong>{character.birth_year}</p>
          <p className="gender"><strong>Gender: </strong>{character.gender}</p>
          {/* <p className="homeworld"><strong>Homeworld: </strong>{character.homeworld}</p> */}
          {/* <p className="films"><strong>Films: </strong>{character.films}</p> */}
          {/* <p className="species"><strong>Species: </strong>{character.species}</p> */}
          {/* <p className="vehicles"><strong>Vehicles: </strong>{character.vehicles}</p> */}
          {/* <p className="starships"><strong>Starships: </strong>{character.starships}</p> */}
          </div> 
        </div>
        )

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {data}

      </div>
    );
  }
}



export default App;
