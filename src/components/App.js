// import React, { useState, useEffect } from "react";
// //import './App.css';
// import axios from "axios";
//// import "./components/App.scss"
//import PhotoCard from './components/PhotoCard';
//import { Card, Image } from 'semantic-ui-react';

import React, { useState, useEffect } from "react";
import axios from "axios";
// import CardCarousel from './CardCarousel';
//import "../src/components/App.scss";

// import { Table } from 'semantic-ui-react';
// import  CustomCardSlide from './ CustomCardSlide';
// import CustomCardSlide from './CustomCardSlide';
import Card  from './PhotoCard'

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
 
    console.log("first render");
    axios.get(
      "https://swapi.co/api/people")
      .then(res => {
       console.log(res.data);

        setData(res.data.results);
        console.log('App.js -> %cres.data.results:', 'color: green', res.data.results)
        console.log('App.js -> %cdata:', 'color: red', data)

      })
      
     
    }, []);

     console.log('App.js -> %cdata:', 'color: red', data)
     console.log('PhotoCard.js -> %cprops.eye_color:', 'color: indigo', data.eyes)
  return (


<section>
     
        { data.map(data => 
       
          <Card name={data.name} 
         height={Math.round(data.height*.0328084)} 
          //gender={data.gender} 
          hair = {data.hair_color}
          eyes = {data.eye_color}
          birthYear = {data.birth_year}/>
     


       

          ) 
        }
        
     
 </section>     

        


  

  )}
export default App;

// function Species() {
//   let [data, setData] = useState([]);
//   let speciesUrl = data.species
//   useEffect(() => {
 
//     console.log("first render");
//     axios.get(
//       {speciesUrl})
//       console.log('App.js -> %cspeciesUrl:', 'color: red', speciesUrl)

//       .then(res => {
//        console.log(res.data);

//         setData(res.data.results);
//         console.log('App.js -> %cdata:', 'color: violet', data)

//       });

     
//     }, []);

//      console.log('App.js -> %cdata:', 'color: red', data)
//   return (



//       <>
//          {data.map(data => (
//           <Card speciesName={data.name} 
//          language={data.language} 
//           gender={data.gender} 
//       /> 
       
          
      
//         ))} 
//         </>






  
//   );
// }