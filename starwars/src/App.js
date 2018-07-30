import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prevPage: '',
      nextPage: ''
    };
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    console.log('called with url: ', URL);
    if (URL.length>0) {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data.next) {
            this.setState({ nextPage: data.next });
          } else {
            this.setState({ nextPage: '' });
          }
          if (data.previous) {
            this.setState({  prevPage: data.previous });
          } else {
            this.setState({ prevPage: '' });
          }
          this.setState({ starwarsChars: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
      }
  };

  clicked = (event) => {
    if (event.target.className === 'next-page') {
      this.getCharacters(this.state.nextPage);
    } else if (event.target.className === 'prev-page'){
      this.getCharacters(this.state.prevPage);
    } else {
      console.log('You reached this function by mistake');
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars chars={this.state.starwarsChars} prevPage={this.state.prevPage} nextPage={this.state.nextPage} clicked={this.clicked} />
      </div>
    );
  }
}

export default App;
