import React, { Component } from 'react';
import './App.css';
import ToonCard from './ToonCard';
import SoundPlayer from './Sound';

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
  //<Scrollbars renderThumbVertical={({ style, ...props }) =>
   //<div {...props} style={{ ...style, backgroundColor: '#000, width: '4px', opacity: '0.5'}}/>
  //}>
  
  render() {
    return (
      
      <div className="App">
        <h1 className="Header">ReactWars</h1>
        <h2 className="Japense">v a p o r w a v e ク 押 ニ む み 臆</h2>
        {this.state.starwarsChars.map((tooninfo, i) => <ToonCard key={i} tooninfo={tooninfo}/>)}
        <h3 className="m-player"><SoundPlayer/></h3>
      </div>
    );
  }
}

export default App;
