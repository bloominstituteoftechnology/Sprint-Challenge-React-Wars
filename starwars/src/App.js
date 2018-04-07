import React, { Component } from 'react';
import './App.css';
import LinkDisplay from './linkdisplay';

const List = props => {
  console.log("props", props.data)
  return( <div>{props.data.map((u, index) => 
  <div className='card__container'><h1 key={u + index} className='card__container-names'>{u.name}</h1>
  <div className='list-box'>
  <ul>
    <li>mass</li>
    <li>{u.mass}</li>
    <li>height</li>
    <li>{u.height}</li>
    <li>Born</li>
    <li>{u.birth_year}</li>
    <li>Eyes</li>
    <li>{u.eye_color}</li>
    <li>Gender</li>
    <li>{u.gender}</li>
    <li>Skin Tone</li>
    <li>{u.skin_color}</li>
  </ul>
  </div>
  <div className='list-box'>
  <ul>  
    <LinkDisplay />
  </ul>
  </div>
  </div>
)}</div> )
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
    if (this.state.starwarsChars.length < 2) return (<h1>not here</h1>)
    return (
       
      <div className="App">
        <h1 className="Header">React Wars</h1>
        
        <List data={this.state.starwarsChars} />
        
        
      </div>
    );
  }
}

export default App;
