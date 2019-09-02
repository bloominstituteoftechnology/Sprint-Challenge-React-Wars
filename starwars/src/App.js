import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Name from './components/Name';
import Birthday from './components/Birthday';
import Gender from './components/Gender';
// import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
// import { Button } from 'reactstrap';

const url = 'https://swapi.co/api/people/'
function App () {
  const [data, setData] = useState([{}]);
  // const [count, setCount] = useState('starwarsChars');
  
  useEffect(() => {
    // setData(array);
    // console.log(data)
    axios.get(url)
  .then(response => {
    console.log(response.data);
    setData(response.data)
    })
    // .cath(error => console.log(error))
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    return (
    <div className="App">
      <h1 className="Header">React Wars - Star Wars</h1>
    
          {data.map(item => {
           return (
             <div>
            <Name name={item.name} />
            <Birthday birth_year={item.birth_year} />
            <Gender gender={item.gender} />
            </div>
            )
        })}
    </div>
     );
 }

    export default App;
