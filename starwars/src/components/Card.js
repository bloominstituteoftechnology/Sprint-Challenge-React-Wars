import React from 'react';
import AttributeList from './AttributeList';

const Card = props => {
    const i = props.item;
    return (
        <div className="card">
            <h1>{i.name}</h1>
            <h2>{i.birth_year}</h2>
            <p>{i.eye_color}</p>
            <AttributeList item={i.films} listStyle="ol" />
            <p>{i.gender}</p>
            <p>{i.hair_color}</p>
            <p>{i.height}</p>
            <p>{i.homeworld}</p>
            <p>{i.mass}</p>
            <p>{i.skin_color}</p>
            <AttributeList item={i.species} />
            <AttributeList item={i.starships} />
            <AttributeList item={i.vehicles} />
        </div>
    );
};

export default Card;
