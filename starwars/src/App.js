import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,setcharacters] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchCharacter = (id) =>
    fetch(`https://swapi.co/api/people/${id}`)
      // .get('https://swapi/co/api/people')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setcharacters(res.data.results)
      })
      fetchCharacter(characters)
  }, [characters])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      </div>
    <div>
      {characters.map(person => {
        // {operators.map(operator => <OperatorButton operator={operator} addOperator={props.addOperator}/>)}
        return <
          key = {person.name}
          name = {person.name}
          mass = {person.mass}
          skinColor = {person.skin_color}
          height = {person.height}
          homeWorld = {person.homeworld} />}
          )
      }
    </div>
    
  );
}

export default App;
