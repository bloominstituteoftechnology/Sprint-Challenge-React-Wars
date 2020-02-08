import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import CharCard from './components/charCard';
import Searchbar from './components/searchbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
`

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ people, setPeople ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ gender, setGender ] = useState("Male")
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then((res) => {
        console.log(res.data)
        setData(res.data.results)
        setPeople(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  const activateSearch = (e) => {
    e.preventDefault()
    const res_search = data.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
    const res = res_search.filter((person) => person.gender.toLowerCase() === gender.toLowerCase())
    setPeople(res)
  }

  return (
    <Container className="App">
      <h1 className="Header">React Wars</h1>
      <Searchbar activateSearch={activateSearch} setSearch={setSearch} setGender={setGender} />
      <CardDiv>
        {
          people !== []
            ?
          people.map((person, i) => <CharCard key={i} {...person} />)
            :
          <p>loading</p>
        }
      </CardDiv>
    </Container>
  );
}

export default App;
