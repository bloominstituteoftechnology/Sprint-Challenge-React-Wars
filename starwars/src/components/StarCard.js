import React from 'react';

const StarCard = (props) => {
    return (
        <div className='card'>
            <h4>{props.name}</h4>
            <ul>
                <li>Birth Year: {props.birthyear}</li>
                <li>Hair Color: {props.haircolor}</li>
                <li>Eye Color: {props.eyecolor}</li>
                <li>Height: {props.height}</li>
                <li>Gender: {props.gender}</li>
            </ul>
        </div>
    );
}

export default StarCard