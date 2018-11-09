import React from 'react';


const Character = props => {
    return (
    <div>
    <h3> {props.charProps.name}</h3>
    <p> 
    
    Birth: {props.charProps.birth_year} <br/>
    Height: {props.charProps.height} inches <br/>
    Gender: {props.charProps.gender} <br/>
    Eye Color: {props.charProps.eye_color} <br/>
    Hair Color: {props.charProps.hair_color} <br/>
    Mass: {props.charProps.mass} <br/>
    Skin Color: {props.charProps.skin_color} <br/>


    
    
    </p> 
     </div>
    )
    
}

export default Character; 