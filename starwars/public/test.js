import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul className="char-grid">
          {this.state.starwarsChars.map((char, i) => {
            return <CharDetails key={i} char={char} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

class CharDetails extends React.Component {
  state = {
    homeworld: null,
  };
  render() {
    const { char } = this.props;
    return (
      <li className="char">
        <h1>{char.name}</h1>
        <div>{char.eye_color} eyes</div>
        <hr />
          {this.state.homeworld !== null ? (
            <div>Homeworld: {this.state.homeworld.name}</div>
          ) : null}
        <hr />
      </li>
    );
  }

  componentDidMount() {
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}