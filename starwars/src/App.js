import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import StarCard from './StarCard.js';
import Films from './Films.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starChars: []
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
        this.setState({ starChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <img className='header-logo' src="https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326" />
        <h1 className="Header">The Empire Swipes Back</h1>
        <StarCard {...this.state}/>
      </div>
    );
  }
}

export default App;
