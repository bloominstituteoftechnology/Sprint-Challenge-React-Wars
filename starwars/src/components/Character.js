import React from 'react';
//import './Character.css';


function Character(props) {
    return (
    <div className="character-component">
       <div className="character-component__top">
            <h2 className="component-flex"><span>Name: </span><span>{props.character.name}</span></h2>
            <h3 className="component-flex"><span>Birth Year: </span><span>{props.character.birth_year}</span></h3>
            <h3 className="component-flex"><span>Created: </span><span>{props.character.created}</span></h3>
            <h3 className="component-flex"><span>Edited: </span> <span>{props.character.edited}</span></h3>
            <h3 className="component-flex"><span>Eye Color: </span> <span>{props.character.eye_color}</span></h3>
       </div>
        <div className="character-component__bottom">
            <p className="component-flex"><span>Gender:</span><span>{props.character.gender}</span></p>
            <p className="component-flex"><span>Hair Color:</span><span>{props.character.hair_color}</span></p>
            <p className="component-flex"><span>Height:</span><span>{props.character.height}</span></p>
            <p className="component-flex"><span>Mass:</span><span>{props.character.mass}</span></p>
            <p className="component-flex"><span>Skin Color:</span><span>{props.character.skin_color}</span></p>
        </div>
    </div>
    );
}

export default Character;