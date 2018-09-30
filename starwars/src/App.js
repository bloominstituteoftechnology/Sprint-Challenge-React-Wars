import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  backgroundHandler = event => {
   
    if (event.target.className==='trick') {
      event.target.className='card';}
    
    else {event.target.className='trick'}
    console.log('It Worked');
  

 
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
    console.log(this.backgroundHandler)

    return (
      <div>
        <CharacterList list={this.state.starwarsChars} backgroundHandler={this.backgroundHandler} />
      </div>
    );
  }
}

export default App;
