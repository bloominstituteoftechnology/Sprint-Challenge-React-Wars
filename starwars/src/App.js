import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import StarWarsList from './components/StarWarsList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople]= useState([]);


  useEffect(()=> {
      axios
      .get(`https://swapi.co/api/people/`)
      .then(res=> {
        setPeople(res.data.results)
        console.log(res.data.results);
      })
      .catch(err=> console.log(`This is giving me a error: `, err));
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsList data={people}/>
    </div>
  );
}

export default App;
