import React from 'react';
import Dog from './Dog'

const Dogs = (props) => {
    return (
        <div>
            {Object.keys(props.breeds).map(breed => {
                return <Dog dog={props.breeds[breed]} dogName={breed} />
            })}
        </div>
    )
}

export default Dogs;