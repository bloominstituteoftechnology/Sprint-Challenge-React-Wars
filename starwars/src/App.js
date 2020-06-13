import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    const fetchData = () => {
        axios
        .get(`https://swapi.dev/api/people/`)
        .then(response => {
          console.log(response.data.results);
          setData(response.data.results);
        })
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        data.length ?
          data.map(data => (
            <Character data={data} />
          ))
          :
          <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;

