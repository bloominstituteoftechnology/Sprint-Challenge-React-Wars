import React, { Component } from 'react';
import './App.css';
import List from './List';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';

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
    fetch('https://swapi.co/api/people/')
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
    return (
      <div className="App">
      <h1 className="Header">Bee's React Wars</h1>
        <div className="Card">
          <h2>{List.name}</h2>
          <p>{List.height}</p>
          <p>{List.mass}</p>
          <p>{List.hair_color}</p>
          <p>{List.skin_color}</p>
          <p>{List.eye_color}</p>
          <p>{List.birth_year}</p>
          <p>{List.gender}</p>
          <p>{List.homeworld}</p>
          <p>{List.birth_year}</p>
          <ul>
            <li>{List.films}</li>
          </ul>
          <p>{List.species}</p>
          <p>{List.vehicles}</p>
          <p>{List.starships}</p>
          <p>{List.created}</p>
        </div>
      </div>
    );
  }
}

export default App;
