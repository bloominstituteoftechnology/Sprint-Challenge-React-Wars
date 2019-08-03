import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CharactersList from './components/CharactersList/CharactersList';
import Button from './components/NavigationButton/NextButton';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState('');
  const [url, setUrl] = useState('https://swapi.co/api/people/')
  const [nextUrl, setNextUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data.results);
        setNextUrl(res.data.next);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(`Unable to retrieve data: ${err}`)
      })
  }, [url]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharactersList data={data} isLoading={isLoading} />
      <Button setUrl={setUrl} nextUrl={nextUrl} />
    </div>
  );
}

export default App;
