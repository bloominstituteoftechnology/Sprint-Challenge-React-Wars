import React from 'react'
import Character from './Character'
import uuid from 'uuid'
export const Characters = (props) => {
    const {characters} = props
    console.log(props)
    return (
        
        <div className="wrapper">
             <h3>Characters</h3>
            
             <div className="biggerContainer">
                {
                    characters.map(character=>{
                        return(
                        
                            <Character character = {character}  />
                            
                        ) 
                    })
                }
             </div>
           
        </div>
    )
}

export default Characters
