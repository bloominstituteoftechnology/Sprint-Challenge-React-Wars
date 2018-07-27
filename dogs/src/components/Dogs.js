import React from 'react';
import './Dogs.css';

const Dogs = props => (
    <div className="dogs">
        {Object.keys(props.dogs).map((dog, ind) => {
            return (
                <a key={ind} className="dog" href="https://dog.ceo/dog-api/" >
                    {dog.slice(0, 1).toUpperCase() + dog.slice(1)}
                </a>
            );
        })}
    </div>
);

export default Dogs;