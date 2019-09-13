import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PeopleCard from './components/PeopleCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //array of objects {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
  const [people, setPeople] = useState([]);

  useEffect( function() {
      axios.get("https://swapi.co/api/people/")
      .then(function(resp) {
        setPeople(resp.data.results);
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  , []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cardDisplay">
      {
        people.map(person => {
          return <PeopleCard data={person}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
