import React from 'react';
import './CardHeader.css';

const CardHeader = ({ swChars }) => {
    return (
        <div className="card__header">
            <div className="name">
                {swChars.name }
            </div>
        </div>
    );
}

export default CardHeader;