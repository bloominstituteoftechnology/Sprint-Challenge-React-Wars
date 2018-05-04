import React, { Component } from 'react';
import './App.css';
import CardMain from './components/card';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
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
    fetch('https://swapi.co/api/films')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsFilms: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  toggle(x) {
    let film = '';
    film = this.state.starwarsChars[x].films.map((element) => {
      fetch(element)
        .then(res => {
          return res.json();
        })
        .then(data => {
          return data.title
        })
        .catch(err => {
          throw new Error(err);
        })
      return (
        film
      );
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
          <CardMain data={this.state} toggle={this.toggle} />
        </div>
      </div>
    );
  }
}

export default App;
