import React from 'react';

const Characters = props => {
    console.log(props)
    return(
        <React.Fragment>

        <h2 className = "name">{props.name}</h2>
        <p>Height:{props.height}    <br/>
           Weight:{props.mass}      <br/>
           gender:{props.gender}    <br/>
           Hair: {props.hairColor}  <br/>
           Skin:{props.skinColor}   <br/>
           Eyes:{props.eyeColor}    <br/>
           Birth Year:{props.birthYear}
            </p>

        </React.Fragment>
    )
}

export default Characters;


// height = {char.height}
// mass = {char.mass}
// hairColor = {char.hairColor}
// skinColor = {char.skinColor}
// eyeColor = {char.eyeColor}
// birthYear = {char.birthYear}
// gender = {char.gender}