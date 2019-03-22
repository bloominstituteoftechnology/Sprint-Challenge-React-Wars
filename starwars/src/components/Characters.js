import React from 'react';

function Characters(props) {
    return (
        <div className="character-card">

            <div className="character-info">
                <h3>{props.characterProp.name}</h3>
                <p>
                    <strong>Identity:</strong> {props.characterProp.identity}

                </p>
            </div>
        </div>
    )
}

export default Characters;