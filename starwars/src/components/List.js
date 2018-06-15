import React from 'react';
import './List.css';

const List = props => {
    return(
        <div>
        {props.ListDisplay.map(item => {
            return(
            <div className='container' key={Date.now()}>
            <ul className='card'>
                <li>Name: {item.name}</li>
                <li>Gender: {item.gender}</li>
                <li>Height: {item.height}</li>
                <li>Birth Year: {item.birth_year}</li>
                <li>Eye Color: {item.eye_color}</li>
                <li>Hair Color: {item.hair_color}</li>
                <li>Mass: {item.mass} </li>
            </ul>
            </div>
            );
        })}
        </div>
    );
}

export default List;