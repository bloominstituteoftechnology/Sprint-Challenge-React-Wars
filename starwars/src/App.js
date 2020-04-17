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
  const [search,setSearch]= useState([])
  if (pageCount === 0){
    setPageCount(1)
  }



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

  const changeHandler = (e)=>{
    setSearch(e.target.value)
    e.target.value= ''
    
  }
  const searchClick = useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then((res)=>{
      setCharacters(res.data.results)
    })
  },[search])

  

  const pageIncrease = ()=>setPageCount(pageCount + 1)
  const pageDecrease = ()=>setPageCount(pageCount - 1)
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const HeaderStyle = styled.h1 `

font-family: 'Bangers', cursive;
color:white;
background:black;
letter-spacing:3px;
  
  `

  
  
  return (
    <div className="App">
      <HeaderStyle className="Header">Characters</HeaderStyle>
      <strap.Row>
        <strap.Col xl='3'>
          <strap.Row>
            <strap.Col>
              <strap.Input id='search' onBlur={changeHandler} className='text-center'></strap.Input>
              <strap.Button onClick={searchClick} color='success'>Search Character</strap.Button>
             
              
            </strap.Col>
            
          </strap.Row>
          
        </strap.Col>
        
      </strap.Row>


      
    <strap.ButtonGroup>
        <strap.Button onClick={pageDecrease}  color='success'> Previous Page</strap.Button>
        <strap.Button onClick={()=>{setSearch([])}} color='warning'>Reset</strap.Button>
        <strap.Button onClick={pageIncrease} color='primary'>Next Page</strap.Button>
    </strap.ButtonGroup>
      
        <strap.Row>
          {characters.map(character=>{
           return <Character props={character}/>
          
          })}
        </strap.Row>
        
      
      <strap.ButtonGroup>
        <strap.Button onClick={pageDecrease} color='success'> Previous Page</strap.Button>
        <strap.Button onClick={()=>{setSearch([])}} color='warning'>Reset</strap.Button>
        <strap.Button onClick={pageIncrease} color='primary'>Next Page</strap.Button>
      </strap.ButtonGroup>
    </div>
  );
}

export default App;
