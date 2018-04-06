import React, { Component } from 'react';
 import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import CharacterList from './CharacterList.js';
 
 class App extends Component {
   state = {
     starwarsChars: []
   }
 
   componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(res => {
      return res.json();
    }

    render() {
      return (
        <div className="App container">
+        <div><h1 className="Header">React Wars</h1></div>
+        <div> <CharacterList people={this.state.starwarsChars} /> </div>
       </div>
     );
   }
 }

 export default App;

    