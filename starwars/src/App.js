import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Crawl from './components/Crawl';
import './App.css';


function App () {
  const [data, setData] = useState([{}]);
  
  useEffect(() => {
    // setData(array);
    // console.log(data)
    axios.get('https://swapi.co/api/people/?page=1')
  .then(response => {
    console.log(response.data);
    setData(response.data.results)
    })
    .catch(error => console.log(error))
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    return (
      <React.Fragment>
        <Crawl />
    <div className="App">
      <h1 className="Header">React Wars - Star Wars</h1>
    
          {data.map(item => {
           return <Card name={item.name} birth_year={item.birth_year} gender={item.gender} eye_color={item.eye_color} url={item.url} />

          //  <Button variant="success">Next</Button>
          //  <Button variant="danger">Prev</Button>

        })}
    </div>
    </React.Fragment>
     );
 }

   export default App;
