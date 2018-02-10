import React, { Component } from 'react';
import './App.css';


// function Icon({ icon }) {
//   return (         
//       <div>{icon}</div>    
//       );
// }

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
        
        <ul  className ="item-grid" >     
        { this.state.starwarsChars.map((item) => {
          return(
            <li className ="item" >
              <h1>{item.name} </h1>
              <li className = "item-attributes">
                <div>{item.eye_color} eyes</div>
                <div>{item.skin_color} skinned</div>
                <div>{item.height} tall</div>
                <div>born in {item.birth_year}</div>
              </li>
            </li>
          );    
     })}      
     </ul>
                      
      </div>
    );
  }
}

export default App;
