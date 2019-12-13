import React, {useState, useEffect} from 'react';
import './App.css';
import { CharacterListing } from './components/CharacterListing';


const axios = require('axios');

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then((res) => {
        setCharacters(res.data.results);
    }).catch(err => {
      console.log("couldn't get people data");
    }).finally(() => {
      console.log("nothing happened");
    });
}, [])

if (!characters) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
                console.log(characters)
      }
      {
        characters.map((item) => {
          console.log(item)
          return (
            <CharacterListing person={item}/>
          );
        })
      }
    </div>
  );
}

export default App;