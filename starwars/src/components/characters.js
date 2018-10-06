import React from 'react';



const Characters = props => {
    
    return(


            <div className= "char">
               
            <h3>{props.charInfo.name}</h3>

            <p>Gender: {props.charInfo.gender}</p>
            <p>Height: {props.charInfo.height}</p>
            <p>Hair Color: {props.charInfo.hair_color}</p>
            <p>Mass: {props.charInfo.mass}</p>
            <p>Skin Color: {props.charInfo.skin_color}</p>
            <p>Birth Year: {props.charInfo.birth_year}</p>

            
        </div>


);
    
}

export default Characters;