import React from 'react';
import Dog from './Dog'
import './Dog.css'

const Dogs = (props) => {
    return (
        <div className="dog-container">
            {Object.keys(props.breeds).map(breed => {
                return <Dog dog={props.breeds[breed]} dogName={breed} />
            })}
        </div>
    )
}

export default Dogs;