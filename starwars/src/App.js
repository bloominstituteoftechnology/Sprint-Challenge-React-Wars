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
        <div className="header-box"> 
        <img className='headstar' src="https://static1.squarespace.com/static/57a08731e4fcb54d65c2481d/t/57d7cba38419c22c6f135c2a/1473760177409/Rotating-Xwing.gif?format=750w" />
        <img className='header-logo' src="https://vignette.wikia.nocookie.net/disney/images/2/21/Star_Wars_logo.png/revision/latest?cb=20170909202326" />
        <img className='headstar' src="https://media.giphy.com/media/3og0ILdD4AWjibwIFO/giphy.gif" />
        <h1 className="Header">The Empire Swipes Back</h1>
        </div>
        <StarCard {...this.state}/>
      </div>
    );
  }
}

export default App;
