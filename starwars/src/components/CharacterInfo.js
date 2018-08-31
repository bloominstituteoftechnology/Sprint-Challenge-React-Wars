import React from 'react';

const CharacterInfo = props => {
    return (
        <div className="card">
            <div className="char-info">
                <p className="char-attr">Name: {props.info.name}</p>
                <p className="char-attr">Gender: {props.info.gender}</p>
                <p className="char-attr">Birth Year: {props.info.birth_year}</p>
                <p className="char-attr">Skin Color: {props.info.skin_color}</p>              
                <p className="char-attr">Hair Color: {props.info.hair_color}</p>                      
                <p className="char-attr">Eye Color: {props.info.eye_color}</p>
                <p className="char-attr">Mass: {props.info.mass}</p>
                <p className="char-attr">Height: {props.info.height}</p>
            </div>
        </div>
        
    );
}

export default CharacterInfo;