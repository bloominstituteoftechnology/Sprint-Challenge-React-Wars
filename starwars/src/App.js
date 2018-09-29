import React, { Component } from 'react';
import './App.css';
import CardList from "./components/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  clickHandler = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.add('selected');
  };

  resetHandler = () => {
    document.querySelectorAll('.characterCard').forEach(elem => {
      return elem.classList.remove('selected');
    })
  };




  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <CardList starwars={this.state.starwarsChars}
                    clickHandler={this.clickHandler}
                    key={this.state.starwarsChars.name}
          />
        </div>
        <div className="reset" onClick={this.resetHandler}>Reset</div>
      </div>
    )
  }
}


export default App;
