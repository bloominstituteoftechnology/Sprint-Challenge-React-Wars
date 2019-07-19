import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import "./components/App.scss"
import PhotoCard from './components/PhotoCard';
//import {  Image, Grid } from 'semantic-ui-react';


// const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
function App(props) {
  
const [data, setData] = useState([]);

useEffect(() => {
  console.log("first render");
  axios.get("https://swapi.co/api/people")
    .then(res => {
      let  data = res.data
      setData(res.data.results);

    //data = Object.entries(data);
    console.log('App.js -> %cdata:', 'color: blue', data)
    


    // .catch(error => {
    //   console.error("index.js -> %c\"There's a data issue:", "color: red", error);
    // });


      console.log('App.js -> %cres.data:', 'color: green', data)
    });
    

}, [] );




  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
    <div className="photoCards">
        {Array.from(data).map((data, key) => (
          

          

 
          <PhotoCard name={data.name} 
                            gender={data.gender} 
                            species = {data.species}
                            url={data.url} /> 
                  
        ))}
      </div>
      : <div>Loading...</div> 
    </div>


    
  );

  

}

export default App;
 