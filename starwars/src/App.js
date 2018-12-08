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
    this.getCharacters('https://swapi.co/api/people');
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
    const starwarsChars = this.state.starwarsChars.map(el => {
      return <article className="charCard"> 
        <h2>{el.name}</h2>
        <h3>Birth Year<h4>{el.birth_year}</h4></h3>
        <h3>Created<h4>{el.created}</h4></h3>
        <h3>Edited<h4>{el.edited}</h4></h3>
        <h3>Eye Color<h4>{el.eye_color}</h4></h3>
        {/* <h3>Films<ul>{[el.films]}</ul></h3> */}
        <h3>Gender<h4>{el.gender}</h4></h3>
        <h3>Hair Color<h4>{el.hair_color}</h4></h3>
        <h3>Height<h4>{el.height}</h4></h3>
        <h3>Homeworld<h4>{el.homeoworld}</h4></h3>
        <h3>Mass<h4>{el.mass}</h4></h3>
        <h3>Species<h4>{el.species}</h4></h3>
        <h3>Skin Color<h4>{el.skin_color}</h4></h3>
        {/* <h3>Starships<ul>{el.starships}</ul></h3> */}
        <h3>Vehicles<ul>{el.vehicles}</ul></h3>
      </article>

    });
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <div className= "charCard">{starwarsChars}</div>
        </div>
      </div>
    );
  }
}

export default App;
