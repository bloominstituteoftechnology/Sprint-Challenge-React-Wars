import React, { Component } from 'react';
import './App.css';
import './components/charCard';

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
        <h3>Birth Year<p>{el.birth_year}</p></h3>
        <h3>Created<p>{el.created}</p></h3>
        <h3>Edited<p>{el.edited}</p></h3>
        <h3>Eye Color<p>{el.eye_color}</p></h3>
        <h3>Films<p className="api">{[el.films]}</p></h3>
        <h3>Gender<p>{el.gender}</p></h3>
        <h3>Hair Color<p>{el.hair_color}</p></h3>
        <h3>Height<p>{el.height}</p></h3>
        <h3>Homeworld<p className="api">{el.homeoworld}</p></h3>
        <h3>Mass<p>{el.mass}</p></h3>
        <h3>Species<p className="api">{el.species}</p></h3>
        <h3>Skin Color<p>{el.skin_color}</p></h3>
        <h3>Starships<p className="api">{el.starships}</p></h3>
        <h3>Vehicles<p className="api">{el.vehicles}</p></h3>
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
