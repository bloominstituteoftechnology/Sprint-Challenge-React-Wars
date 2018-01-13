import React from 'react';
import './CardContainer.css';

import CardHeader from '../CardHeader/CardHeader.js';
import CardLeft from '../CardLeft/CardLeft.js';
import CardRight from '../CardRight/CardRight.js';
import CardFooter from '../CardFooter/CardFooter';

const CardContainer = ({ swChars }) => {

    return(
        <article className="card__mainContainer">

            <div className="card__header">
                <CardHeader swChars={swChars} />
            </div>

            <div className="card__body">
                <CardLeft swChars={swChars} />
                <CardRight swChars={swChars} />
            </div>

            <div className="card__footer">
                <CardFooter swChars={swChars} />
            </div>

        </article>
    );
}

export default CardContainer; 