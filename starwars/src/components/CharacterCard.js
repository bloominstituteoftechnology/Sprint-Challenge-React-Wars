import React from 'react';

const CharacterCard = props => {
    return (
        <div className = 'card'>
            Name: {props.name}
            <br></br>
            Gender: {props.gender}
            <br></br>
            Birth Year: {props.birth_year}
            <br></br>
            Height: {props.height} cm
            <br></br>
            Mass: {props.mass} kg
            <br></br>
            Number of films: {props.films.length}
        </div>
    );
};

export default CharacterCard