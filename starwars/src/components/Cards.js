import React from 'react';
import './StarWars.css';

const Cards = props => {
    return (
        <div className="col card">
            <p>{`Name: ${props.data.name}`}</p>
            <p>{`Birth Year: ${props.data.birth_year}`}</p>
            <p>{`Gender: ${props.data.gender}`}</p>
            <p>{`Height: ${props.data.height}`}</p>
            <p>{`Mass: ${props.data.mass}kg`}</p>
            <p>{`Skin Color: ${props.data.skin_color}`}</p>
            <p>{`Hair Color: ${props.data.hair_color}`}</p>
        </div>
    );
}

Cards.defaultProps = {
    data: {
        birth_year: 'year',
        created: 'time',
        edited: 'time',
        eye_color: 'color',
        gender: 'gender',
        hair_color: 'color',
        height: 'height',
        mass: '0',
        name: 'name',
        skin_color: 'color',
    }
}

export default Cards;