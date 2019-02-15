import React, { Component } from 'react';
import './App.css';

import StarWarsCharsBio from './components/StarWarsCharsBio';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      imgUrls: [{img: 'https://i.redd.it/2qmnb44sbt7z.jpg'}, {img: '2'}, {img: '3'}, {img: '4'}, {img: '5'}, 
      {img: '6'}, {img: '7'}, {img: '8'}, {img: '9'}, {img: '10'}]
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
        <div className='characterList'>
        {this.state.starwarsChars.map((eachStarChar, index) => (
          <StarWarsCharsBio key={index} characteristic={eachStarChar} imgUrlFromApp={this.state.imgUrls}/>
        ))}
        {/* {this.state.imgUrls.map((eachImgUrl, index) => (
          <StarWarsCharsBio characteristic={eachImgUrl} />
        ))} */}
        </div>
      </div>
    );
  }
}

export default App;
