import React from 'react';
//import StarCharsList from './StarCharsList';

const StarCard = props => {
    return (
        <div className="StarCard">
        <p>{props.person.name}</p>
        </div>
    );
};

export default StarCard;