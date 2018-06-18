import React from 'react';


const Char = props => {
    return (
    <div className = "card">
       name: {props.swChar.name} <br/>
       height: {props.swChar.height} <br/>
       mass: {props.swChar.mass} <br/>
       hair color: {props.swChar.hair_color} <br/>
       skin color: {props.swChar.ski_color} <br/>
       eye color: {props.swChar.eye_color} <br/>
       birthday: {props.swChar.birth_year} <br/>
       gender: {props.swChar.gender} <br/> 
    </div>
    )
}

export default Char;

        // name:{char.name} <br></br>
        // height :{char.height} <br></br>
        // mass: {char.mass} <br></br>
        // hair color: {char.hair_color} <br></br>
        // skin color: {char.ski_color} <br></br>
        // eye color: {char.eye_color} <br></br>
        // birthday:{char.birth_year} <br></br>
        // gender:{char.gender} <br></br>