import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState({});

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    const fetchData = () => {
      for(let charNum = 1; charNum <= 10; charNum++){
        axios
        .get(`https://swapi.dev/api/people/${charNum}/`)
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Character data={data} />
    </div>
  );
}

export default App;

//Notes make an empty array push everything that im looping through in the charater api then use that as the main array and list the characters info from then on