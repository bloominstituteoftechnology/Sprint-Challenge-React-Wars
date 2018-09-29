import React from 'react';
import './card.css';
import CardName from './CardName';


const CardContainer = (props) => {
    return(
        <div className={'cardContainerItems'}>
            <CardName title={props.names.name} />
        </div>  
    )

}

export default CardContainer