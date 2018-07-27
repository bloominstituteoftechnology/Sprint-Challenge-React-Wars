import React, { Component } from 'react';
import './App.css';
// import Form from './components/Form';
// import InfoList from './components/InfoList';
// import CharacterCard from './components/CharacterCard';
import StarwarsChars from './components/StarwarsChars';

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
        <div>
          <div className="character-cards">
            <StarwarsChars chars={this.state.starwarsChars}/>
          </div>
        </div>
         
        {/* <div className="Character-Buttons">
          <Form 
          handleButtonLuke={this.ButtonLuke}
          handleButtonC3po={this.ButtonC3po}
          />
        </div>
        <div>
          <InfoList
          name={this.state.starwarsChars.name}
          gender={this.state.starwarsChars.gender}
          />
        </div>
          <CharacterCard 
          name={this.state.starwarsChars.name}
          birth_year={this.state.starwarsChars.birth_year}
          /> */}
      </div>
    );
  }
}

export default App;
