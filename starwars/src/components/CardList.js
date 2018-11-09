import React from 'react';
import Card from './Card';
import './CardList.sass';
const CardList = props => {
    return (
        <div className="card-list">
            {props.items.map(item => (
                <Card item={item} />
            ))}
        </div>
    );
};

export default CardList;
