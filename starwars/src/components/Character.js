// Write your Character component here
import React, { useState, useEffect } from "react"
import {Button} from "reactstrap"
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
        <div className='container'style={{width:'100%'}} >
        <div  className='charater' style={{ display: 'flex', justifyContent:'space-evenly',alignItems:'center', justifyItems:'center'}}>
           <h2> {props.character.name} </h2>
        <button class="btn btn-outline-primary btn-lg" onClick={() => openInfo(props.character.id)}  >{props.character.birth_year}</button>
      
        
        {
            details &&
            <>
            <h3> {props.character.name}</h3>
            <p>{props.character.name}  is {props.character.height} tall</p>
            
            
            </>
        }
        <button class="btn btn-outline-warning btn-lg"  onClick={closeInfo}>Close</button>
        
        </div>   
        </div>
    )
}

export default Character