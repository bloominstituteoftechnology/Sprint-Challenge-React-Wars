import React from 'react';

const Species = props => {
    return (
        <div>
            Species
            {props.species.map(specie => (
                <div>
                    <img src={specie} />
                </div>
            ))}
        </div>
    );
};

export default Species