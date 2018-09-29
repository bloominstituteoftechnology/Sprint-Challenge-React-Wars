import React from 'react';
import './Dog.css';
import Card from './Card';

const CardComponent = (props) => {
    return (
        <div className="dog-cards">
            {/* Takes as input (from props) each of the todos in state, iterates through
            (using .map), and renders them onscreen. */}
            {props.dogBreeds.map(dog => {
                return (
                    <div className="dog-card">
                        <Card dog={dog} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardComponent;