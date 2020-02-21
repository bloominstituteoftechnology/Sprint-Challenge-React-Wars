import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./CardData"

;



function Card () {

    const [data, setData ] = useState([]);

useEffect(() => {
  axios.get("https://swapi.co/api/people/")
  .then(res => {
    setData(res.data.results)

  })
  .catch(()=> console.log("error"))
}, [] );


console.log();

    return(
        <div>
            
            { data.map( item => 
            <CardData data={item} />
            )}
          
            
        
        </div>

    )
}

export default Card;