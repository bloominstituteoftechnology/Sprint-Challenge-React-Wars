import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Names from './components/Names.js'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character] = useState([])
  useEffect (() => {axios.get('https://swapi.co/api/people/')

  .then(res => {character(res.data);
                
  })

  .catch( err => console.log("error message :", err))
},[])


return (
 <div className="App">
   <h1 className="Header">React Wars</h1>
   <div className="app"{...App}/>   
  
  {console.log(character)}
      <Names info={character}/>
    </div>



);
}  

export default App;

