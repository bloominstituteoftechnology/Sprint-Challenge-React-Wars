import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharCard from './components/Card';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // * * * STATE PROPERTIES

  const [chars, setChars] = useState([]);

  // * * * USE EFFECT

  useEffect(() => {
    const getData = () => {
      axios.get('https://swapi.co/api/people')
      .then(response => {
        // console.dir(response.data);
        // console.dir(response.data.results);

        let selection = [];

        response.data.results.forEach(char => {
          selection.push(char);
        });

        // console.log(selection);

        selection = selection.flat();

        setChars(selection);

        // console.dir(chars);
      })
      .catch(error => {
        console.log('Data not returned', error);
      });
    };

    getData();
  }, []);
  
  // let flatArr = chars.flat();
  // console.dir(flatArr);
  
  console.dir(chars);

  // let flattenedArr = chars.flat();
  // setChars([flattenedArr]);
  // console.log(chars);

  // const componentArr = chars.map((char, index) => {
  //   return (<CharCard key={index} name={char.name} />);
  // })

  // console.dir(componentArr);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {chars.map((char, index) => {
        return (<CharCard key={index} name={char.name} />);
      })}
    </div>
  );
}

export default App;
