import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './components/Navigation.js';
import MakeCard from './components/MakeCard.js';
/* Questions:
Thinking in react is thinking in an environment where the DOM is not re rendered every time there is a change, instead 
you are updating one small element at a time so it is more effective and you are able through State, to re render various 
html css and javascript to the DOM one piece at a time. Props is simply passing down data to sub components, it allows you to break up 
your app in to several components making it ideal for a dev team. Effects is synced through useEffect and it prevents infinite API calls for example, data leakage.*/

/* Create div for content using flex box */
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
/* Create a div container to hold the persons pulled from API data */
const Persons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-flow;
`;
/* declare the App function stored in variable to be rendered on DOM */
const App = () => {
/* Set the State of data */
const [data , setData] = useState([]);

/* axios GET data from the variable that is the API */
const url = 'https://swapi.co/api/people/';
/* useEffect to limit API calls and leakage */  
useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);   
    })
      .catch((error) => console.log('the force is not with you...'))
  }, [])
/* Return in () the div where React Wars will be the class App and rendered 
  Fetched characters from the star wars api in an effect hook. */
  return (

    <div className='App'>
{/* style content div and .map data below to return an array of characters to be rendered in Content Persons*/} 
{/* Pull (via return statement) in data with keys to be passed as props to the MakeCard default function generating an array in Persons */}
{/* import navigation and make card functions to render props */}
      <h1 className='Head'>React Wars</h1>
      <Content>
        {data.map((character, index) => {
          return (
              <Persons className='person' key={index}>
              <Navigation key={index} name={character.name} />
              <MakeCard key={index} name={character.name} height={character.height} mass={character.mass} />
              </Persons>
            )
          }
          )
        }
      </Content>
    </div>
    );
}

export default App;
