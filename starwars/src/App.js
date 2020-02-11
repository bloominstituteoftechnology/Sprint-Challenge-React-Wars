import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import styled from 'styled-components';
import StarWars from './components/StarWars';
import Page from './components/Page';
import Loader from './components/Loader/Loader';

const PersonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const ApiUrl = 'https://swapi.co/api/people/';
  const [person, setPerson] = useState();
  const [url, setUrl] = useState(ApiUrl);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setPerson(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
      })
      .catch(error => console.log(error));
  }, [url]);
  console.log(person);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (!person) return <Loader />;
  return (
    <PersonList>
      {person.map((item, index) => (
        <StarWars key={index} item={item} />
      ))}
      <Page next={nextUrl} previous={prevUrl} url={setUrl} />
    </PersonList>
  );
};

export default App;
