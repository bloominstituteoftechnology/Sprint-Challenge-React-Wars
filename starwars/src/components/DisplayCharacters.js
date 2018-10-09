import React from 'react';


const DisplayCharacters = props => {

  
let characters = props.data.map( character => {
    let films = character.films.map( film => {
        return( <li>{film}</li> ) })  

    return (
        <div className = "character">
            <h2> {character.name}</h2>
            <p> gender : {character.eye_color}</p>
            <p> height : {character.height}</p>
            <p> homeworld : {character.homeworld} </p>
            <ul> film : <br></br>
                {films}
            </ul>
        </div>
    )
})

    return (
        
           <div className='characterContainer'>
               {characters}
           </div>
      
    )
}


export default DisplayCharacters;