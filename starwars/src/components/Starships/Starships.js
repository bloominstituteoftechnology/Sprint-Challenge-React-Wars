import React from 'react';

const Starships = props => {
    return (
        <div>
            {props.starships.length > 0 ? 'starships:'  : 'No starships'}
            {props.starships.map(starship => (
                <div>
                    <img src={starship}/>
                </div>
            ))}
        </div>
    );
};

export default Starships