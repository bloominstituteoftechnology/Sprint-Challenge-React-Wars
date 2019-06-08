import React from 'react';

const Character = (props) => {
    return (
        <div className="char-card">
            <div className="indiv-card">
                <h3>{props.characters.name}</h3>
                <p>
                    <strong>Height:</strong> {props.characters.height}
                </p>
                <p>
                    <strong>Birth year:</strong> {props.characters.birth_year}
                </p>
            </div>
        </div>
       
       
    )
}

export default Character;