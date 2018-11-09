import React, { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <CharacterList
            chars={this.state.starwarsChars}
            currentIndex={this.state.currentIndex}
          />
        </div>
      </div>
    );
  }
}

export default App;
