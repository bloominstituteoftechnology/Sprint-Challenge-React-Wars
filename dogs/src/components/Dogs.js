import React from 'react';
import './Dogs.css';

const Dogs = props => (
    <div className="dogs">
        {Object.keys(props.dogs).map((dog, ind) => {
            return (
                <button key={ind} className="dog" onClick={() => props.onClick(dog)} >
                    {dog.slice(0, 1).toUpperCase() + dog.slice(1)}
                </button>
            );
        })}
    </div>
);

export default Dogs;