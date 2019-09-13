import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard.js";
import styled from "styled-components";
import './App.css';

const Header = styled.h1`
  font-size: 43m;
  background: navy;
  color: #443e3e;
  text-shadow: 1px 1px 5px black;
`
const StarWarsCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char, setChar] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios.get('https://swapi.co/api/people')
      .then(response =>{
        console.log(response);
        setChar(response.data.results);
      })

      .catch(err =>{
        console.log(err)
      })

  },[])

  return (
    <div className="App">
      <Header>React Wars</Header>
      <StarWarsCardDiv>
        {char.map(chars=>(
          <StarWarsCard name={chars.name} height={chars.height} weight={chars.mass} hair={chars.hair_color} skin={chars.skin_color} eye={chars.eye_color}/>
        ))}
      </StarWarsCardDiv>
    </div>
  );
}

export default App;
