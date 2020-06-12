import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from '../src/components/Character'

const App = () => {

  const [characters, setCharacters] = useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')

    .then(res => {
      console.log(res.data)
      setCharacters(res.data.results)
      
    })

    .catch(err => {
      console.log('Something went wrong with API request',err)
    })

    .finally(() => {
      console.log('Done with API request')
    })
  },[])

  console.log('characters array:', characters)

  return (
    <div className="App">
      <h1 className="Header">sanity check</h1>
  
      {console.log('return statement:',characters[0])}

      {characters === '' ? '' : characters.map(info => {
          return <Character props={info}></Character>
        })
      }
      
    </div>
  );
}

export default App;
