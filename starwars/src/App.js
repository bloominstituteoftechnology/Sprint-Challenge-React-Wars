import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from '../src/components/Character';


const App = () => {
  const [characters, setCharacters]= useState([]);
  // const [isHappy, setIsHappy]= useState(true);
  console.log("Characters", characters[0])


  useEffect(()=>{
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res=> setCharacters(res.data.results))
    .catch(err=>console.log('Nope', err))
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
   <div className='App'>
      <h1 className="Header">Characters</h1>

      <div className='character-container'>

      {characters.map(character =>(
        <Character key={character.id} name={character.name} img={character.image} gender={character.gender} status={character.status} species={character.species}/>
      ))}   
</div>
    </div>
  );
}

export default App;
