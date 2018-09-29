import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      place: [],
      current: '',
      next: '',
      previous: '',
      previousHidden: true
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
        console.log(data.next);
        console.log(data.previous);
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous,
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = (event) => {
    if (this.state.next === null) {
      this.getCharacters('https://swapi.co/api/people');
    } else {
      this.getCharacters(this.state.next);
      this.setState({
        previousHidden: false
      })
    }
  }

  previous = (event) => {
    if (this.state.previous === null) {
      this.setState({
        previousHidden: true
      })
    } else {
      this.getCharacters(this.state.previous); 
    }
  }

  nextCard = (event) => {
    event.preventDefault();
    const newarr=['2014-12-09T13:50:51.644000Z', '2014-12-10T15:10:51.357000Z', '2014-12-10T15:11:50.376000Z', '2014-12-10T15:18:20.704000Z', '2014-12-10T15:20:09.791000Z', '2014-12-10T15:52:14.024000Z', '2014-12-10T15:53:41.121000Z', '2014-12-10T15:57:50.959000Z', '2014-12-10T15:59:50.509000Z', '2014-12-10T16:16:29.192000Z'];
    this.setState({
      place: newarr,
      current: '2014-12-09T13:50:51.644000Z'
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='buttons'>
          <button className={ this.state.previousHidden ? 'hidden' : 'button'} onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>
        <CardList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;


// birth_year:
// "19BBY"
// created:
// "2014-12-09T13:50:51.644000Z"
// edited:
// "2014-12-20T21:17:56.891000Z"
// eye_color:
// "blue"
// films:
// Array[5]
// gender:
// "male"
// hair_color:
// "blond"
// height:
// "172"
// homeworld:
// "https://swapi.co/api/planets/1/"
// mass:
// "77"
// name:
// "Luke Skywalker"
// skin_color:
// "fair"
// species:
// Array[1]
// starships:
// Array[2]
// url:
// "https://swapi.co/api/people/1/"
// vehicles:
// Array[2]