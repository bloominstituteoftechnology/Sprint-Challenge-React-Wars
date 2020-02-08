import React, { useState, useEffect} from 'react';
import axios from "axios";
import PersonCard from "./components/StarWars";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => {
          //console.log(response.data.results);
          setData(response.data.results)
        })
        .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {data && data.map(item => {
        return (
      <PersonCard
      name={item.name}
      birth_year={item.birth_year}
      eye_color={item.eye_color}
      hair_color={item.hair_color}
      skin_color={item.skin_color} />
        )
      })}
    </div>
  );
}

export default App;
