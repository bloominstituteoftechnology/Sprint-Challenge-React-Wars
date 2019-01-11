import React from 'react';

const Dog = props => {
    return(
        <>
            <h1>{props.dogName}</h1>
            {props.dog.map(attribute => {
                return <p>{attribute}</p>
            })}
        </>
    )
}

export default Dog