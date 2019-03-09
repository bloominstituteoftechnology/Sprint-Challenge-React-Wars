import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import CharacterList from "./components/CharacterList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
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
        <div className="Character-List">
          {this.state.starwarsChars.map(item => {
            return (
              <div className="item">
                <p>{item.name}{item.birth_year}{item.created} {item.edited}{item.eye_color}{item.films}{item.gender} {item.hair_color}{item.height}{item.homeworld} {item.mass}{item.name}{item.skin_color}{item.species} {item.starships}{item.url}{item.vehicles}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;