import React from 'react'

const Character = props => {
    return (
        <div>
            <h2>Name: {props.character.name}</h2>
            <h5>Birth Year: {props.character.birth_year}</h5>
        </div>    
        )
}
export default Character 