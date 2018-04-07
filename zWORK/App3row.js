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
        {/* PASTE LS-NOTES DIVS BELOW */}
        <div className="Notes-panel">
            <div className="View-header">
                <h1>Star Wars Characters{this.props.pageHeader}</h1>
            </div>
            <div>
              <ul>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 0 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 1 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 2 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                </li>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 3 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 4 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 5 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                </li>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 6 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 7 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Character 8 Name {this.props.title}</h3>
                  </div>
                  <div className="Note-body">Character details go here.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>  
        {/* END OF LS-NOTES DIVS */}
      </div>
    );
  }
}

export default App;
