import React, { useState, useEffect } from 'react';

import Cardcreator from "./components/Cardcreator";
import axios from "axios";

const Getdata = () =>{
    const[apidata, setApidata] = useState([])

    useEffect(() => {
  axios.get("https://swapi.co/api/people/").then(response => {

    setApidata(response.data.results)
  } )
  .catch(err =>{
      console.log(err)
  })

},[])


return (
    <div>
    
    {apidata.map(i => (
        <Cardcreator apidata = {i}/>
    ))}
    
    </div>
)
    }


export default Getdata
