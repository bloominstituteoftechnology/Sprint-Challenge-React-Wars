import React, { Component } from 'react';
import './App.css';
import CharCard from "./CharCard";
import {
    Card,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div> {this.state.starwarsChars.map(char => {
    return <CharCard key={char.id} char={char} />;

  })}
</div>
      </div>
    );
  }
}


// {
//     "count": 87,
//     "next": "https://swapi.co/api/people/?page=2",
//     "previous": null,
//     "results": [
//         {
//             "name": "Luke Skywalker",
//             "height": "172",
//             "mass": "77",
//             "hair_color": "blond",
//             "skin_color": "fair",
//             "eye_color": "blue",
//             "birth_year": "19BBY",
//             "gender": "male",
//             "homeworld": "https://swapi.co/api/planets/1/",
//             "films": [
//                 "https://swapi.co/api/films/2/",
//                 "https://swapi.co/api/films/6/",
//                 "https://swapi.co/api/films/3/",
//                 "https://swapi.co/api/films/1/",
//                 "https://swapi.co/api/films/7/"
//             ],
//             "species": [
//                 "https://swapi.co/api/species/1/"
//             ],
//             "vehicles": [
//                 "https://swapi.co/api/vehicles/14/",
//                 "https://swapi.co/api/vehicles/30/"
//             ],
//             "starships": [
//                 "https://swapi.co/api/starships/12/",
//                 "https://swapi.co/api/starships/22/"
//             ],
//             "created": "2014-12-09T13:50:51.644000Z",
//             "edited": "2014-12-20T21:17:56.891000Z",
//             "url": "https://swapi.co/api/people/1/"
//         },

export default App;
