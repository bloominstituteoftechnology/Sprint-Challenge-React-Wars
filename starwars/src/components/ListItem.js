import React from 'react';
import './StarWars.css';

const ListItem = props => {
    return (
        <div className='charcter-preview' onClick={() => props.showCurrentChar(props.char.name)}>
            {props.char.name}
        </div>
    );
};

export default ListItem;