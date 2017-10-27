import React, { Component } from 'react';
import Header from './header/Header';
import Character from './character/Character';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      classes: "chars"
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
        setTimeout(() => { this.setState({ classes: "chars chars-show" })}, 500);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className={this.state.classes}>
          <div>
            {
              this.state.starwarsChars.map((char, i) => {
                return (
                  <Character
                    index={i}
                    key={i}
                    name={char.name}
                    height={char.height}
                    mass={char.mass}
                    hair_color={char.hair_color}
                    skin_color={char.skin_color} />
                );
              })
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
