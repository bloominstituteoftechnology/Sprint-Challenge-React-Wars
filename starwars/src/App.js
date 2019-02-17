import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import './components/StarWars.css';
import CharacterFilter from './components/CharacterFilter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      inputText: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  robotsOnly = event => {
    event.preventDefault();
    const robots = [...this.state.starwarsChars].filter((chara) => {
      return chara.gender === "n/a";
    })

    this.setState({
      starwarsChars: robots
    })
  };

  finishHim = id => {
  //  event.preventDefault();  Gave an error, "unexpected use of event". Why does it work without it?
      const survivors = [...this.state.starwarsChars].filter((chara) => {
      return chara.created !== id;
    })

    this.setState({
      starwarsChars: survivors
    })
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  search = event => {
  event.preventDefault();
    console.log("hello!")
    console.log(this.state.inputText)

      const target = [...this.state.todos];
      target.map(chara => {
        if(chara.name === this.state.inputText) {
          console.log(chara);
        }
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterFilter
        robotsOnly={this.robotsOnly}
        inputText={this.inputText}
        handleInput={this.handleInput}
        search={this.search}
        />
        <CharacterList
        charas={this.state.starwarsChars}
        finishHim = {this.finishHim}
        />

      </div>
      
    );
  }
}

export default App;
