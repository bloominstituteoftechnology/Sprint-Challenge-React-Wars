import React from 'react'

const Character = props => {
    return (
        <div>
            <h2>Name: {props.character.name}</h2>
            <h4>Birth Year: {props.character.birth_year}</h4>
            <h4>Height: {props.character.height}</h4>
        </div>    
        )
}
export default Character 