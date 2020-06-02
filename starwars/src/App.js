import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Characters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data,setdata] = useState([])
  // Fetch characters from th e API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios
  .get('https://rickandmortyapi.com/api/character')
  .then(res => {
    // console.log(res.data.results)
    setdata(res.data.results);
    console.log(data)
  })  
},[])
// console.log(data);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characterArray={data}/>
    </div>
  );
}

export default App;
