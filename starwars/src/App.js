import React, { Component } from 'react';
import './App.css';

// Create a character component
  function Character(props) {
    return(
      <div>
              <ul>
                <li className="Note-row">
                  <div className="NoteItem">
                    <div className="Note-header">
                        {/* <h3>{this.props.name}</h3> */}
                        <h3>{props.name}</h3>
                    </div>
                    <div className="Note-body">
                      <u>Physical Characteristics</u>
                      <p>Name: {props.name}</p>
                      <p>Species: {props.species}</p>
                      <p>Gender: {props.gender}</p>
                      <p>Height: {props.height}</p>
                      <p>Mass: {props.mass}</p>
                      <p>Skin_Color: {props.skin_color}</p>
                      <p>Eye_color: {props.eye_color}</p>
                      <p>Hair_Color: {props.hair_color}</p>
                    </div>
                  </div>
                  <div className="NoteItem">
                    <div className="Note-header">
                        <h3>Character 1 Name {this.props.title}</h3>
                    </div>
                    <div className="Note-body">
                      <u>Physical Characteristics</u>
                      <p>Name: {props.name}</p>
                      <p>Species: {props.species}</p>
                      <p>Gender: {props.gender}</p>
                      <p>Height: {props.height}</p>
                      <p>Mass: {props.mass}</p>
                      <p>Skin_Color: {props.skin_color}</p>
                      <p>Eye_color: {props.eye_color}</p>
                      <p>Hair_Color: {props.hair_color}</p>
                    </div>
                  </div>
                  <div className="NoteItem">
                    <div className="Note-header">
                        <h3>Character 2 Name {this.props.title}</h3>
                    </div>
                    <div className="Note-body">
                      <u>Physical Characteristics</u>
                      <p>Name: {props.name}</p>
                      <p>Species: {props.species}</p>
                      <p>Gender: {props.gender}</p>
                      <p>Height: {props.height}</p>
                      <p>Mass: {props.mass}</p>
                      <p>Skin_Color: {props.skin_color}</p>
                      <p>Eye_color: {props.eye_color}</p>
                      <p>Hair_Color: {props.hair_color}</p>
                    </div>
                  </div>
                </li>
              </ul>
      </div>
    )
  }
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
            var app = (
              <div>
                <Character name='Tchala'species='Wakandan' gender='Male' height='181' mass='89' skin_color='Brown' eye_color='Brown' hair_color='Black' />

                <Character name='Suri' species='Wakandan' gender='Female' height='165' mass='50' skin_color='Brown' eye_color='Hazel' hair_color='Auburn' />
              </div>
)

            </div>
          </div>  
        {/* END OF LS-NOTES DIVS */}
      </div>
    );
  }
}

// ReactDOM.render(app, document.querySelector('#app'));
export default App;
