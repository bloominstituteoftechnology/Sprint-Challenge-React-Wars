import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SWList from './SWList';

function SWList() {


const [people, setPeople] = useState([]);
useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(res => {
        console.log("people", res.data);
         setPeople(res.data);
    })

    .catch(err => {
        console.log( err);


}, []);


return(

<div className="App">
      <h1>className="Header">React Wars</h1>
    </div>
    
);
}




export default SWList;