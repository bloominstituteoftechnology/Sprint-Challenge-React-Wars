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
            <div className='btnContainer'>
                <div className='return prev' onClick={props.showPrevPage}>Previous Page</div>
                <div className='return next' onClick={props.showNextPage}>Next Page</div>
            </div>
        </div>
    )
}

export default ListChar;