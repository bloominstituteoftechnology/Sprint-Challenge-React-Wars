import React, {useState,useEffect, Children} from 'react';
import * as strap from 'reactstrap'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import * as gsap from 'react-gsap'

import Character from './components/Character'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters,setCharacters]= useState([]);
  const [pageCount, setPageCount] = useState(1)


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageCount}`)
    .then(res=>{
      setCharacters(res.data.results)

    })

    .catch(()=>{
      console.error()
    })

  },[pageCount])

  const pageIncrease = ()=>setPageCount(pageCount + 1)
  const pageDecrease = ()=>setPageCount(pageCount - 1)
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
    <strap.ButtonGroup>
        <strap.Button onClick={pageDecrease}  color='success'> Previous Page</strap.Button>
        <strap.Button onClick={pageIncrease} color='primary'>Next Page</strap.Button>
    </strap.ButtonGroup>
      
        <strap.Row>
          {characters.map(character=>{
           return <Character props={character}/>
          
          })}
        </strap.Row>
        
      
      <strap.ButtonGroup>
        <strap.Button onClick={pageDecrease} color='success'> Previous Page</strap.Button>
        <strap.Button onClick={pageIncrease} color='primary'>Next Page</strap.Button>
      </strap.ButtonGroup>
    </div>
  );
}

export default App;
