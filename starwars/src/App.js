import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import People from './components/People'
import './App.css';



const AppContainer = styled.div `
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Button = styled.div`
  color: red;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = () => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}&format=json`)
      .then(res => {
        setData(res.data.results)
        console.log(data)
      })
      .catch(error =>{
        console.log(error)
      })
  };

 useEffect(fetchData, [page])
    

  return (
    <div className = "App">
      <h1 className = "Header">React Wars</h1>
      
        <h2>CHARACTERS AND TRAITS</h2>
        <AppContainer>
        {data.map ( (rebels, index) => {
          return <People  name={rebels.name} 
                          key = {index}
                          height={rebels.height}
                          birthday={rebels.birth_year}
                          eye={rebels.eye_color}/>
        })}
        </AppContainer>
        <div>
          <br></br><br></br>
        </div>
        <Button>
        <div className="PageButtons">
        <button type="button" class="btn btn-primary btn-dark btn-lg" onClick={() => setPage(page - 1)}>Previous</button>
        <button type="button" class="btn btn-primary btn-light btn-lg" onClick={() => setPage(page + 1)}>Next</button>
      </div>
      </Button>
      
    </div>
  )
}


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



export default App;
