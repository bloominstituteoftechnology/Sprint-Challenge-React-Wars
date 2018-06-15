import React, { Component } from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import UserContainer from './components/User/UserContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
     console.log(this.state);
    return (
      <div className="app-wrapper">
     
       <HeaderContainer />
       <UserContainer characters={this.state.starwarsChars} />
     
      </div>
    );
  }
}

export default App;
