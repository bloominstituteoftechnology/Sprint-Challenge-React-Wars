import React from 'react';
import './StarWars.css';

const ListItem = props => {
    return (
        <div>
            {props.char.name}
        </div>
    );
};

export default ListItem;