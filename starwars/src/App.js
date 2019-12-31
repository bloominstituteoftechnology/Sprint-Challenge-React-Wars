import React, { useState, useEffect  } from 'react';
import './App.css';
import axios from 'axios';
import StarWarsCards from './components/StarWarsCards';


const App = () => {

  const [people, setPeople] = useState([]);
  

  useEffect(() =>{
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
      setPeople(response.data.results)

      console.log(response)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((peps,index) => {
        return <StarWarsCards key={index} name={peps.name} height={peps.height} hairColor={peps.hair_color} gender={peps.gender}/>
      })}
    </div>
  );
}

export default App;
