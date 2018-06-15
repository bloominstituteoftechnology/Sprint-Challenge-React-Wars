import React from 'react';
import './StarWars.css';
import { Card, CardTitle } from 'reactstrap';

const StarWarsCard = props => {
    return (
        <div className='row'>
            {props.starwarsChars.map(data => {
                return <Card key={Math.random()} className='card-container' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle style={{ color: data.eye_color }}>{data.name}</CardTitle>
                    <div>
                        <p>Birth Year: {data.birth_year}</p>
                        <p>Created: {data.created}</p>
                        <p>Edited: {data.edited}</p>
                        <p>Eye Color: {data.eye_color}</p>
                        <p>Gender: {data.gender}</p>
                        <p>Hair Color: {data.hair_color}</p>
                        <p>Height: {data.height}</p>
                        <p>Mass: {data.mass}</p>
                        <p>Skin Color: {data.skin_color}</p>
                    </div>
                </Card>
            })}
        </div>
    );
}

export default StarWarsCard;