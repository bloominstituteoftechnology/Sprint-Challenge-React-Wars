import React, { Component } from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import UserContainer from './components/User/UserContainer';
import SwipeableViews from 'react-swipeable-views';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      firstCharacter: '',
      firstMatch: '',
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
        let myProfile = data.results[1];
        let firstCharacter = data.results[0];
        console.log(firstCharacter);
        console.log(myProfile);
        let match = Math.floor((Math.random() * 10));
        if (match === 0 || match === 1) {
          match = Math.floor((Math.random() * 10));
        }
        let firstMatch = data.results[match];
        this.setState({ 
          starwarsChars: data.results,
          firstCharacter: firstCharacter,
          firstMatch : firstMatch,
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  matchSwipeRight = () => {
  console.log ('It\'s a match!')  
  };


  render() {
     console.log(this.state);
    return (
      <div className="app-wrapper">
      
       <HeaderContainer />
       <SwipeableViews>
   
       <UserContainer characters={this.state.starwarsChars} myProfile = {this.myProfile} matchSwipeRight = {this.matchSwipeRight} firstCharacter ={this.state.firstCharacter}/>
     
       <UserContainer characters={this.state.starwarsChars} myProfile = {this.myProfile} matchSwipeRight = {this.matchSwipeRight} firstCharacter ={this.state.firstMatch}/>
     
       < UserContainer characters = {
         this.state.starwarsChars
       }
       myProfile = {
         this.myProfile
       }
       matchSwipeRight = {
         this.matchSwipeRight
       }
       firstCharacter = {
         this.state.starwarsChars[Math.floor((Math.random() * 10))]
       }
       />
      </SwipeableViews>
      </div>
      
    );
  }
}

export default App;
