import React, { Component } from 'react';
import './App.css';

const List = props => {
  console.log("props", props.data)
  return( <div>{props.data.map((u, index) =>
  <div className='card__container'><h1 key={u + index} className='card__container-names'>{u.name}</h1>
  
  <ul>  
    <li>Born {u.birth_year}</li>
    <li>Eyes {u.eye_color}</li>
    <li>Gender {u.gender}</li>
    <li>Skin Tone {u.skin_color}</li>
    <li>HomeWorld {u.homeworld}</li>
  </ul>
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
