import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import People from './components/people'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(function(error){
        console.log(error)
      });
  }, [])
  
  return (
    <div className='container'>
      <h1>REACT WARS</h1>
    <People info={data} /></div>
  )
}

export default App;
