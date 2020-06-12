// Write your Character component here
import React, { useState, useEffect } from "react"
import {Button} from 'reactstrap'
import axios from 'axios'


function Character (props) {
    
    const [details, setCurrentCharacterId] = useState(null)
   
    const openInfo =  async () => {
        const response = await axios.get(
          `http://swapi.dev/api/people/`
        );
    
        setCurrentCharacterId(response.data.results);
      }
       
       

      
  const closeInfo = () => {
    setCurrentCharacterId(null)
  }
   
    return(
        <div>
        <div className='charater'>
            {props.character.name} 
        <button className="details" onClick={() => openInfo(props.character.id)}>{props.character.birth_year}</button>
        </div> 
       
       <div className='charater-details'>

        
        {
            details &&
            <>
            <h2> {details.name}</h2>
            <p>{details.name} is {details.age} and is {details.height} tall</p>
            
            
            </>
        }
        <button onClick={closeInfo}>Close</button>
        
        </div>   
        </div>
    )
}

export default Character