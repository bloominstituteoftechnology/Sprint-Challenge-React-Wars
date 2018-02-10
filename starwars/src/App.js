import React, { Component } from 'react';
import './App.css';
import CharCards from './Components/CharCards';
import { Name , Height , Mass, HairColor, SkinColor , EyeColor , BirthYear , Gender } from './Components/FilterBar';
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
        <div className='filterBar'><Name /><Height /><Mass /><HairColor /><SkinColor /><EyeColor /><BirthYear /><Gender /></div> 
        <div className='cardDisplay'>
        <CharCards results={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

// Next steps after displaying data. Create filter functions to filter display based on characteristics chosen.

export default App;