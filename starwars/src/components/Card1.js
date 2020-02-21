import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./CardData";
import "./StarWars.css";



function Card1 () {

    const [data, setData ] = useState([]);

useEffect(() => {
  axios.get("https://swapi.co/api/people/")
  .then(res => {
    setData(res.data.results)

  })
  .catch(()=> console.log("error"))
}, [] );



    return(
        <div className="cardholder">
            
            { data.map( item => 
            <CardData key={item.name} data={item} />
            )}
          
            
        
        </div>

    )
}

export default Card1;