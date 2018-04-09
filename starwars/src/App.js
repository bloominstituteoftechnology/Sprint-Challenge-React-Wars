import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import Character from './Character/Character';
import CharacterCard from './CharacterCard/CharacterCard';

import StarWarsChars from './StarWarsChars';

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
        <h1 className="Header">REACTORS</h1>
        <div><h2>Characters from Science-Fiction and Super Hero Films</h2></div>
        
        <div className="Char-container">
          {this.state.starwarsChars.map(char => <StarWarsChars key={char.name} char={char} />)}
        </div>
        <Character />
        <CharacterCard />
        
        // {/* PASTE LS-NOTES DIVS BELOW */}
        // {/* {this.state.movies.map(movie => (
        //   <CharacterCard key={movie.id} movie={movie} />
        // ))} */}
        // {/* END OF LS-NOTES DIVS */}
      </div>
    // return React.createElement('div', null, {className: App} 
    );
  }
}
// Create a character component
  // function Character ({props}) {
  //   const { name, species, gender, height, mass, skin_color, eye_color, hair_color, created, birth_year, homeworld, starships, vehicles, url } = props
  //   return(
  //     <div className="Note-row">
  //       <div className="NoteItem">
  //       <Link to={`/api/people/${props.name}`}>
  //         <div className="Note-header"><h3>{props.name}</h3>
  //         </div>
  //       </Link>
  //       <div className="Note-body">
  //         <div className="Sub-Header">Physical Characteristics</div>
  //           <p>Name: {props.name}</p>
  //           <p>Species: {props.species}</p>
  //           <p>Gender: {props.gender}</p>
  //           <p>Height: {props.height}</p>
  //           <p>Mass: {props.mass}</p>
  //           <p>Skin_Color: {props.skin_color}</p>
  //           <p>Eye_color: {props.eye_color}</p>
  //           <p>Hair_Color: {props.hair_color}</p>
  //         </div>
  //         <div className="Sub-Header">Demographic Data</div>
  //           <p>Created: {props.created}</p>
  //           <p>Birth Year: {props.birth_Year}</p>
  //           <p>Homeworld: {props.homeworld}</p>
  //           <p>Starships: {props.starships}</p>
  //           <p>Vehicles: {props.vehicles}</p>
  //           <p>Url: {props.url}</p>
  //         </div>
  //     </div>
  //   )
  // }
// ReactDOM.render(app, document.querySelector('#app'));
export default App;
