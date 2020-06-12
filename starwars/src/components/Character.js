// Write your Character component here
import React, {useEffect} from 'react'
import Container from './Container'

export const Character = (props) => {
        
    
   
    return (
        
        <div>
            <Container>
                <h2>{props.character.name}</h2>
                <img src={props.character.image}/>     
                {console.log(props.character.name)}
            </Container>
            
        </div>
    )
}
export default Character
