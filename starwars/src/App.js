import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
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
        <h1 className="Header">REACT WARS</h1>
        <div className='reactwars'>
          {this.state.starwarsChars.map((chars) => {
            return (
              <div key={chars.name}>
                <div className='charCards'>
                <div className='charCards__name'>{chars.name}</div>
                <div className='charCards__text'>Date of Birth: {chars.birth_year}</div>
                <div className='charCards__text'>Gender: {chars.gender}</div>
                <div className='charCards__text'>Eye Color: {chars.eye_color}</div>
                <div className='charCards__text'>Height: {chars.height}</div>
              </div>
              </div>
            ) 
        })}
        </div>
      </div>
    );
  }
}

export default App;
