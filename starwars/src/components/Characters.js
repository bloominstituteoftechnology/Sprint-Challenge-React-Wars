import React from 'react'
import Character from './Character'
export const Characters = (props) => {
    const {characters} = props
    console.log(props)
    return (
        
        <div>
             <h1>Characters</h1>
            
             
            {
                characters.map(character=>{
                    console.log(character)
                    return(
                       
                        <Character character = {character}/>
                        
                    ) 
                })
            }
        </div>
    )
}

export default Characters
