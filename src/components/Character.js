// Write your Character component here
import React, {useState, useEffect} from 'react'
import Container from './Container'



export const Character = (props) => {     
 
    const [details, setDetails] = useState('details')
    return (
        
        <div>
            <Container className="container">
                <h2 className="characterName">{props.character.name}</h2>
                <div className="left">
                    <img src={props.character.image} onClick={() => {
                       details === 'details' ? setDetails('left') : setDetails('details')
                    }} />  
                </div>
             
                <div className={details}>
                <h2>Details</h2>
                    <li>Species {props.character.species}</li>
                    <li>Location: {props.character.location.name}</li>
                     <li>Status: {props.character.status}</li>
                </div>
              
                   
                {console.log(props.character)}
                
            </Container>
            
        </div>
    )
}
export default Character
