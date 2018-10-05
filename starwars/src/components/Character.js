import React from 'react'

const Character = props =>{
    return(
        <div>
            {props.starwarsChars.name}<br></br>
            {props.starwarsChars.birth_year}<br></br>
            {props.starwarsChars.created}<br></br>
            {props.starwarsChars.edited}<br></br>
            {props.starwarsChars.eye_color}<br></br>
          
            {props.starwarsChars.gender}<br></br>
            {props.starwarsChars.hair_color}<br></br>
            {props.starwarsChars.height}<br></br>
            {props.starwarsChars.mass}<br></br>
            {props.starwarsChars.skin_color}<br></br>
            <br></br><br></br><br></br>
        </div>
    )
}

export default Character