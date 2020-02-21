import React from 'react';

const CharCard = props => {
    console.log(props.state)
    return (
        <div> 
            <h1>Character</h1>
            <h2>Name: {props.state.name}</h2>
            <h3>Birth Year: {props.state.birth_year}</h3>
        </div>
    )
}

export default CharCard;