import React from 'react';

const Starships = props => {
    return (
        <div>
            {props.starships.length > 0 ? 'starships:'  : 'No starships'}
            {props.starships.map((starship, index) => (
                <div key={starship + index}>
                    <img src={starship} alt='starship'/>
                </div>
            ))}
        </div>
    );
};

export default Starships