import React, { Component } from 'react';
import './App.css';
import CharacterCards from './components/CharacterCards';
import Navigation from './components/Buttons/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 'https://swapi.co/api/people',
      nextPage: '',
      previousPage: ''
    };
  }

  parseDateTime(dateTime) {
    let dateArray = dateTime.split("T")[0].split("-");
    let date = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
    let time = dateTime.split("T")[1].split(".")[0];
    return (date +", "+ time)
  }

  nextPage = () => {
    if(this.state.nextPage) {
    this.setState({ 
      currentPage: this.state.nextPage
    })
    this.getCharacters(this.state.nextPage);
    } 
  }

  previousPage = () => {
    if(this.state.previousPage) {
    this.setState({ 
      currentPage: this.state.previousPage
    })
    this.getCharacters(this.state.previousPage);
  }
  }

  componentDidMount() {
    this.getCharacters(this.state.currentPage);
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
        //console.log(data);
        this.setState({ starwarsChars: data.results, nextPage: data.next, previousPage: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <section className="App">
        <Navigation next={this.nextPage} previous={this.previousPage}/>
        <CharacterCards characters={this.state.starwarsChars} parseDateTime={this.parseDateTime}/>
      </section>
    );
  }
}

export default App;
