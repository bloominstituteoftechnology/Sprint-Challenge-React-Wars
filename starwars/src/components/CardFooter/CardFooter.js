import React from 'react';
import './CardFooter.css';

const CardFooter = ({ swChars }) => {
    return (
    <div className="card__footer">    
        <div className="dates">
            <div>{swChars.created }</div>
            <div>{swChars.edited }</div>
        </div>
        <div className="urls">
        <a href={swChars.url }>Character Info Source</a>
        </div>
    </div>
    )
}

export default CardFooter;