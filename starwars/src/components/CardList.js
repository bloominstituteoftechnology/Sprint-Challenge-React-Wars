import React from 'react';
import Card from './Card';
const CardList = props => {
    return (
        <>
            {props.items.map(item => (
                <Card item={item} />
            ))}
        </>
    );
};

export default CardList;
