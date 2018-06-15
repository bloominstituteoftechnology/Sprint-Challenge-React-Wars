import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import UserContainer from './components/User/UserContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      mycharacter: {}
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

  displayMyCharacter = () => {
   let characters = this.state.starwarsChars.slice();
    console.log(characters[0]);
  //  characters = characters.filter(characters[0]);
   this.setState({mycharacter: characters});
  

  };

  render() {
     console.log(this.state);
    return (
      <div className="app-wrapper">
     
       <HeaderContainer />
       <UserContainer displayMyCharacter = {this.displayMyCharacter} />
     
      </div>
    );
  }
}

export default App;
