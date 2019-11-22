import React , { useState , useEffect } from 'react';
import axios from 'axios'
import reactstrap, { Button } from 'reactstrap';

import './App.css';
 

function Character(props) {
  const [name, setName] = useState('')
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/${props.item}`)
    .then( res => {
      const person = res.data
      setName(person.name)
    })
    .catch( err => {
      console.log("Error:", err);
    })
  },[])
    
  return(
    <li>
        <Button color='danger' style={{color:'blue'}} >{name}</Button>
    </li>)
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const nums = [...Array(7).keys()];

  const listItems = nums.map((item, index) => {
    return( <Character key={index} item={item+1}/> )
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
export default App;
