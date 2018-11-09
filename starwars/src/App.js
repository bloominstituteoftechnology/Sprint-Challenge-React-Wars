import React, { Component } from "react";
import "./App.css";

// import Character from './components/Character';
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        // console.log(res)
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        // console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div>
        <div className="App ">
          <div className="fade" />
          <div className="starwars">
            <div className="crawl">
              <CharacterList starwarsChars={this.state.starwarsChars} />
              {this.getCharacters("https://swapi.co/api/people/?page=2"
)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
