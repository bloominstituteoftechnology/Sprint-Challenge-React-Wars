import React from 'react';
import Card from './components/Card';
import './App.css';
import './components/StarWars.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: "",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }
  nextPage = (event) => {
      event.preventDefault();      
      this.getCharacters(this.state.next)
  }
  goingBack = (event) => {
      event.preventDefault();      
      this.getCharacters(this.state.previous)
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
        this.setState({ starwarsChars: data.results,
                        next: data.next,
                        previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button disabled={!this.state.previous ? true : false} className={!this.state.previous ? "inactive" : null} onClick={this.goingBack}>Back</button>
        <button disabled={!this.state.next ? true : false} className={!this.state.next ? "inactive" : null} onClick={this.nextPage}>Next</button>        
        <Card characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
