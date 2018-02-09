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
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars
          <form className="SearchBar">
            <input type="search" placeholder='Search Characters' />
          </form>
        </h1>
        <ul className="CharacterList">
          {this.state.starwarsChars.map((char) => {
            return (
            <li className='CharacterData' key={char.name}>
              <h3>{char.name}</h3>
              <img className='Img' src='https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/350?cb=20091030151422' alt='' />
              <div className='Text'>Name: {char.name}</div>
              <div className='Text'>Eye-color: {char.eye_color}</div>
              <div className='Text'>Birth Year: {char.birth_year}</div>
            </li>
            );
          })}
        </ul>
      </div>
    );
    
  }
}


export default App;
