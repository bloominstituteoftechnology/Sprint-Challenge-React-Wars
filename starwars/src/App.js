import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import People from './components/Character'


const App = () => {

  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://lambda-github-api-server.herokuapp.com/")
    .then(response  => {
      for (let key in response.data.results) {
        setcharacters(response.data.results[key])
        console.log(response.data.results[key])
    }
    }, [])
    .catch(error => {
        console.log("Error!", error);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {characters.map(person => {
          return < People
              key = {person.name}
              name = {person.name}
              mass = {person.mass}
              skinColor = {person.skin_color}
              height = {person.height}
              homeWorld = {person.homeworld}
          />
        })}
    </div>
  );
}




export default App;
