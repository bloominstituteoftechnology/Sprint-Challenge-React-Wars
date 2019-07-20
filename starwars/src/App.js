import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import './App.css';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  width: 100%;
  height: 500px;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // eslint-disable-next-line
  const [data, setData] = useState([])
  // eslint-disable-next-line
  const [page, setPage] = useState(1)

  const fetchData = () => {
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
    // 'https://swapi.co/api/people/2/?format=api'
    
    // 'https://swapi.co/api/people/?format=json'
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('error in api request :(')})
  }

  
  useEffect(fetchData, [page])

  console.log(data);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2 className="Crew">The Crew</h2>
      <AppContainer> 
        {data.map((rebels, index) => {
          return <Persons name={rebels.name} key={index} height={rebels.height} birthday={rebels.birth_year} eye={rebels.eye_color}/>
        })}
      </AppContainer>
      <div className="PageButtons">
        <button className="ButtonPreview" onClick={() => setPage(page - 1)}>Previous</button>

        <button className="ButtonNext" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
