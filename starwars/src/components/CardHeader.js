import React from 'react';

const CardHeader = props => {
    return(
    <div className='card-header'>
    <h2>Welcome to {props.name}'s Profile Card!</h2>
    </div>
    )
}

export default CardHeader;