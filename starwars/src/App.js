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
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Body">
          {this.state.starwarsChars.map(SWChar => {
            return (
              <div key={SWChar.created} className="CharacterCards">
                <div className='CharacterName'>{SWChar.name}</div>
                <div className='CharacterDetails'>Born on the year: {SWChar.birth_year}</div>
                <div className='CharacterDetails'>
                      {SWChar.eye_color},&nbsp;
                      {SWChar.gender},&nbsp;
                      {SWChar.hair_color},&nbsp;
                      {SWChar.height},&nbsp;
                      {SWChar.mass},&nbsp;
                      {SWChar.skin_color}
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