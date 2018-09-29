import React from 'react';
import './StarWars.css';
import CardInfo from './CardInfo';

const Card = (props) => {
    return (
        <div className="card-container">
            {props.starwarsChars.map(data => {
                return <CardInfo
                            key={data.created}
                            name={data.name}
                            height={data.height}
                            mass={data.mass}
                            hair_color={data.hair_color}
                            skin_color={data.skin_color}
                            eye_color={data.eye_color}
                            birth_year={data.birth_year}
                            gender={data.gender}
                        />
            })}
        </div>
    )
}

export default Card;