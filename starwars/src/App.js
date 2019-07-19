import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // eslint-disable-next-line
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
    // 'https://swapi.co/api/people/{number}/?format=api'
    
    //https://swapi.co/api/people/?format=json
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('error in api request :(')})
  }

  
  useEffect(fetchData, [])

  console.log(data);

// iterating through data variable
  data.map(rebelname => {
    setData(rebelname.name)
  })


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <h1>The Rebels</h1>
        <Persons n = {data.name}/>
      </div>
    </div>
  );
}

export default App;
