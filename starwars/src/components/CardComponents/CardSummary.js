import React from 'react';
import './Card.css';
import ArchiveButton from '../ButtonComponents/ArchiveButton';

const CardSummary = (props) => {
    return (
        <div className = 'card-summary-container'>
            <h2 className='card-summary__title'>Character Information</h2>
            <p className = 'card-summary__info'>
                {props.name} was created in {props.created}. Born on the date of {props.born}.
                This character has appeared in {props.films.length} films.
            </p>
            <ArchiveButton />
        </div>
    );
}

export default CardSummary;