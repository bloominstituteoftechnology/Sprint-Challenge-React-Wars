import React, { Component } from 'react';
import Profile from './components/Profile/Profile.js';
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="main_content">
          <ul className="profiles">
            {
              this.state.starwarsChars.map((profile) => {
                return <Profile key={profile.name} profile={profile} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
