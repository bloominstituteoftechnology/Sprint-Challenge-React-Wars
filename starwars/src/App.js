import React, {useState,useEffect}from 'react';
import './App.css';
import Characters from './components/Character'
import axios from 'axios'


const App = () => {
  const [characterSelected, setCharter]= useState([])
 
 useEffect (()=>{
  axios.get(`http://swapi.dev/api/people/`)
  .then(res => {
    setCharter(res.data.results)
   
    
  })
 
  .catch(err => {
    debugger
  }) 
   
 },[])

 console.log(characterSelected)
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { characterSelected.map(charObj=>{
        return <Characters key={charObj.name} character= {charObj}   ></Characters>    })}
    </div>
  );

}

export default App;
