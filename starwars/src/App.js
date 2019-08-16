import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import { Card, Icon, Image } from 'semantic-ui-react'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [page, setPage] = useState('https://swapi.co/api/people');
  const [results, setResults] = useState();

  useEffect(()=>{
    axios
    .get(page)
    .then(response=>{
      console.log(response.data.results)
      setResults(response.data.results);
    })

  },[page]);

  return (
    <div className="App">
      <Card.Group className="cardgroup">
      {(results)? results.map((item,index)=>{
        return <Character person={item} key={item.name} />
      }) : "Loading..."}
      </Card.Group>
    </div>
  );
}

export default App;
