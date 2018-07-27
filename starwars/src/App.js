import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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
        console.log(this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (  
      <div className="bg-img">
        <div className="main-container">
          <h1 className="Header">React Wars</h1>
          <div className="cards-container">
            {this.state.starwarsChars.map(item => <Card
              key={1977 + Math.random()} 
              name={item.name}
              homeworld={item.homeworld}
              birthYear={item.birth_year}
              gender={item.gender}
              skinColor={item.skin_color}
              hairColor={item.hair_color}
              eyeColor={item.eye_color}
              height={item.height}
              mass={item.mass}
            />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
