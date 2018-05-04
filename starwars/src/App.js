import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      charArray: [],
      search: "",
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
        this.setState({ search: "", charArray: data.results, starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  filterPosts = () => {
    let query = this.state.search.toLowerCase();
    let charArray = [ ...this.state.starwarsChars ];
    
    if (query === "") this.setState({ charArray: this.state.starwarsChars });
    charArray = charArray.filter(character => {
      return character.name.toLowerCase().includes(query);
    });
    
    this.setState({ charArray });
  }

  updateDataText = (e, cb) => {
    this.setState({[e.target.name]: e.target.value});
    if (!!cb) cb(); 
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
            <input 
              name="search" 
              onChange={(e) => this.updateDataText(e, this.filterPosts)} 
              value={this.state.search} 
              placeholder="Search Characters" 
            />
            <div className="d-flex flex-wrap justify-content-around char-list">
            {
              this.state.charArray.map(character => <CharacterCard key={character.created} char={character} />)
            }
            </div>
      </div>
    );
  }
}

export default App;
