import React from 'react';
import CardCont from './CardCont';
import NameCont from './NameCont';
import GenderCont from './GenderCont';

const CharCard = (props) => {
    return (
        <CardCont>
            <NameCont>{props.name}</NameCont>
            <GenderCont>Gender: {props.gender}</GenderCont>
        </CardCont>
    )
};

export default CharCard;