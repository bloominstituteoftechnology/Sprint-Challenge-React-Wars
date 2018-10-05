import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile.js';

const obj = {a: 1, b: 1, c: 1};
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
        console.log(res.json);
        return res.json();
      })
      .then(data => {
        console.log(data);
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
        
        <div className='profiles-container'>
        {this.state.starwarsChars.map((profile, index) => {

          return <Profile key={index} id={index} profile={profile} profileList={this.state.starwarsChars}/>

        })}

        </div>
        
      </div>
    );
  }
}

export default App;
