import React, { Component } from 'react';
import Card from './components/Card.js'
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.sort(
            function(a, b)  {
                let aName = a.name.toUpperCase();
                let bName = b.name.toUpperCase();
                if(aName < bName)   {
                    return -1;
                }   else if (aName > bName) {
                    return 1;
                }   else {
                    return 0;
                }
            }
        ).map((char)    =>  (
            <Card name={char.name} height={char.height} mass={char.mass} eye_color={char.eye_color}
                hair_color={char.hair_color} skin_color={char.skin_color} gender={char.gender} key={char.created}/>
        ))}
      </div>
    );
  }
}

export default App;
