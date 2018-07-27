import React from 'react';
import Card from './Card';
import './card.css'

const Characters = props => {
    return (
        <div className="characterCards">
            {props.charArray.map(item => <Card itemprop={item}/>)}
        </div>
    );
}

export default Characters;