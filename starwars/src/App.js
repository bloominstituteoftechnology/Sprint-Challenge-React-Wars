import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h1> Character List</h1>
        <div>
          <CharacterList 
              grabResultsArray={this.state.starwarsChars} />
        </div>
        
      </div>
    );
  }
}


class CharacterList extends React.Component {
  render() {
    return this.props.grabResultsArray.map((e) => {
      return (
        <div>
            <ul>
                <li><Character key={e.created} characterName={e.name} /></li>
            </ul>
        </div>
      )
    });
  }
}

class Character extends React.Component {
  render() {
    return (
      <div>
          <p>{this.props.characterName}</p>
      </div>
    )
  }
}

export default App;
