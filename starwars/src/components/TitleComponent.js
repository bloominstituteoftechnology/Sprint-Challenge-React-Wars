import React from 'react';

const Title = props => {
    return (
        <div className='title'>
        <h1>{props.name}</h1>
        <h4>{props.species} </h4>
        </div>
    )
}

export default Title;