import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import LoaderTool from './components/LoaderTool/LoaderTool.js';
import StarWarsData from './components/Characters/StarWarsData.js'


const CharacterRender= styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
border: 5px black;


`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.3
  const [character, setCharacter] = useState();
  const apiUrl = 'https://swapi.py4e.com/api/people/';
  

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => setCharacter(res.data.results))
      .catch(err => 
        console.log(err));
  }, []);
   /* console.log(character); */
 
  if (!character) return <LoaderTool />;

  return (
    <div className='App'>
      <h1 className='Header'>The Greatest Characters in the Universe!!</h1>
      <div>
      <CharacterRender>
        {character.map((item,index)=>(
          <StarWarsData key={index} item={item} />
        ))}
      </CharacterRender>
      </div>
    </div>
  );
}

export default App;
