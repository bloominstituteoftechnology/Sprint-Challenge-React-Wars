import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from '../src/components/Character'
import CardContainer from './components/Styles/CardContainer'
import Header from './components/Styles/Header'


const App = () => {

  const [characters, setCharacters] = useState('')
  const [searchText, setSearchText] = useState('Search Characters')
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
      <Header>
        <h1 className="Header">React Wars</h1>
      </Header>
     

      <CardContainer>
        
        {characters === '' ? '' : characters.map(info => {
                    return <Character key={info.name} props={info}/>
                  })
        }
      </CardContainer>

      
    </div>
  );
}

export default App;
