import React from 'react';
import './StarWars.css';

const NextPrev = props => {
    return (
        <div>
        <h2> Database </h2>
           <button className="action-buttons" onClick={props.toPrevious}>Back</button>
           <button className="action-buttons" onClick={props.toNext}>Next</button>
            </div>
    );
};

export default NextPrev;