import React, { Component } from 'react';
import './App.css';
import ListChars from './ListChars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
     
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
       
      });
  };

 
  ListItem = props => {
    return props.data.results.map((item, index) => (
      <li>
      {item.name}
      {item.gender}
      {item.height}
      {item.hair_color}
     
      </li>
    ));  
  };






  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <div className="CardContainer">
         <ul>
<li>
</li>
           </ul>
        

          </div>


      </div>
    );
  }
}

export default App;
