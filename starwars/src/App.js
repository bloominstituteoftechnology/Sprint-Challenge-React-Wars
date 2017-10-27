import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
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
        <DisplayChars chars={this.state.starwarsChars} />
      </div>
    );
  }
}

const DisplayChars = props => {
  return (
    <div className="starwarsData">
      {props.chars.map(char => {
        return (
          <div className="starwarsChars" key={char.name}>
            <h3>{char.name}</h3>
            <hr />
            <div className="starwarsCharsAdditionalData">
              <p className="starwarsCharsAdditionalData-text">
                <span className="text-bold">Birth Year:</span> {char.birth_year}{" "}
                <br />
                <span className="text-bold">Gender:</span> {char.gender} <br />
                <span className="text-bold">Height:</span> {char.height} cm{" "}
                <br />
                <span className="text-bold">Mass:</span> {char.mass} kg <br />
                <span className="text-bold">Hair Color:</span> {char.hair_color}{" "}
                <br />
                <span className="text-bold">Skin Color:</span> {char.skin_color}{" "}
                <br />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
