import React from 'react';
import './StarWars.css';
import ListItem from './ListItem';

const ListChar = props => {
    return (
        <div>
            {props.chars.map((char, index) => {
                return <ListItem char ={char}
                                key={index}
                                showCurrentChar={props.showCurrentChar} />
            })}
        </div>
    )
}

export default ListChar;