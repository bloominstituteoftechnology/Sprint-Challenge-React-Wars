import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react' 
import CharacterList from './components/CharacterList'
import axios from 'axios'
import './App.css';

const App = () => {
  const [characterList, setCharacterList] = useState();
  const [characterPage, setCharacterPage] = useState(1)
  console.log('PAGE', characterPage)

  useEffect( () => {
    axios
    .get(`https://swapi.co/api/people/?page=${characterPage}`)
    .then(res => {
      console.log('List Data', res.data)
      setCharacterList(res.data)
    })
  }, [characterPage])
  const changePage = e => {
    e.target.value === 'down'? setCharacterPage(characterPage - 1) : setCharacterPage(characterPage + 1)
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if(!characterList) return <h1>Loading...</h1>
  return (
    <div className="App">
      <Header as="h1" className="Header">React Wars</Header>
      <CharacterList characters={characterList.results}/>
      <button disabled={characterList.previous === null ? true : false} onClick={changePage} value="down">Prev</button>
      <button disabled={characterList.next === null ? true : false} onClick={changePage} value="up">Next</button>
    </div>
  );
}

export default App;
