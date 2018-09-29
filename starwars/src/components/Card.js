import React from 'react';
import './StarWars.css';
import CardInfo from './CardInfo';

const Card = (props) => {
    return (
        <div>
            {props.starwarsChars.map(data => {
                return <CardInfo
                            key={data.created}
                            name={data.name}
                            height={data.height}
                            mass={data.mass}
                        />
            })}
        </div>
    )
}

export default Card;