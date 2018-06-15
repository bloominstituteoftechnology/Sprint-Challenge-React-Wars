import React from 'react';
import './StarWars.css';

const StarWarsButtons = props => {

    return (
        <div className='starwars-buttons'>
            <button onClick={() => props.button(props.prevPage)}>Previous!</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=1')}>1</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=2')}>2</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=3')}>3</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=4')}>4</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=5')}>5</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=6')}>6</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=7')}>7</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=8')}>8</button>
            <button onClick={() => props.button('https://swapi.co/api/people/?page=9')}>9</button>
            <button onClick={() => props.button(props.nextPage)}>Next!</button>
        </div>
    );
}

export default StarWarsButtons;