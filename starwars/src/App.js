import React, { Component } from 'react';
import './App.css';
import  CharImageContainer from './components/CharImage/CharImageContainer'
import CharCardContainer from './components/CharCard/CharCardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      selected:0
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getCharacters('https://swapi.co/api/people/?page=2');
    this.getCharacters('https://swapi.co/api/people/?page=3');
  }

  // componentWillMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }

  imageClickHandler = (name) =>{
    console.log(name, 'You clicked an this image!')
    let localCharArr = this.state.starwarsChars.slice();
    localCharArr.map((charObj,ind) => {
      if (charObj.name === name){
        this.setState({
          starwarsChars:localCharArr,
          selected:ind
        })
      }
    }) 
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
        // this.setState({ starwarsChars: data.results,selected:0 });
        this.setState({ starwarsChars: this.state.starwarsChars.concat(data.results),selected:0 });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    if (this.state.starwarsChars.length !== 0){
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <CharImageContainer appState={this.state} onClick={this.imageClickHandler}/>
          <CharCardContainer appState={this.state}/>
        </div>
      );
    }else {
      return(
        <div></div>
      )
    }
    
  }
}

export default App;
