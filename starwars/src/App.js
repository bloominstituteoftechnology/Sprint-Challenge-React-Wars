import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      newUrl: '',
      oldUrl: ''
    };
  }

  

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL, event) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({newUrl: data.next});
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getnewCharacters = event => {
    event.preventDefault();
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    let usedUrl: '';
    if(event.target.value === 'new') {
      usedUrl = this.state.newUrl;
    } else {
      usedUrl = this.state.oldUrl;
    }
    
    fetch(usedUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({newUrl: data.next});
        this.setState({oldUrl: data.previous})
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    let prev = null;
    if(this.state.oldUrl.length > 1) {
      prev = <button onClick= {this.getnewCharacters} value='old'>Previous</button>;
    } else {
      prev = null;
    }
    return (
      <div className="App">
       <h1>STAR WARS CHARACTERS</h1>
       <div>{prev}</div>
       <button onClick= {this.getnewCharacters} value='new'>Next</button>
       
        <Card 
          starwarsChars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
