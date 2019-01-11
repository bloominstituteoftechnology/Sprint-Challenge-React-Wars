import React from 'react';

const Dogs = (props) => {
    return (
        <div>
            {Object.keys(props.breeds).map(breed => {
                return <h1>{breed}</h1>
            })}
        </div>
    )
}

export default Dogs;