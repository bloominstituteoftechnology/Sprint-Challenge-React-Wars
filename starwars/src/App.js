import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      isHovered: false
    };
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
  }

  handleHover = (event) => {
    event.preventDefault();
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    const starwarsChars = this.state.starwarsChars;

    this.setState({
      isHovered: !this.state.isHovered,
    });

    if (!this.state.isHovered) {
      document.getElementById(`new-card-${index}`).innerHTML = starwarsChars[index].eye_color;
    } else {
      document.getElementById(`new-card-${index}`).innerHTML = starwarsChars[index].name;
    }

  };



  render() {
    const starwarsChars = this.state.starwarsChars;
    return (
      <div className="App">
        <h1 className="Header">Click the cards to cycle through information</h1>
        <div className="flex-card-container">
          {this.state.starwarsChars.map((starwarsChar, i) => {
            return (
              <div className="App-posts">
                <div className="card-container" onClick={this.handleHover}>
                <div id={`new-card-${i}`} className="name">{starwarsChar.name}</div>
                </div>
              </div>
            );
            })}
          </div>
      </div>
    );
  }
}

export default App;
