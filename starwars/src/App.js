import React, { Component } from 'react';
import Card from './Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      filtered: [],
    };
  }
  filterSearch = e => {
    e.preventDefaults;
    this.setState({
      filtered: function() {
        return this.state.starwarsChars.filter(chars => {
          return chars.name.includes(e.target.value.toLowerCase());
        });
      },
    });
  };
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
        <div className="container">
          <div className="row">
            <div className="user-grid d-flex flex-wrap col-md-12 panel">
              <form>
                <input placeholder="Search" onChange={this.filterSearch} />
              </form>
              {this.state.filtered.map(char => {
                return <Card key={char.id} char={char} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
