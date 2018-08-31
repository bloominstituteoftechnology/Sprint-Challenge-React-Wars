import React from 'react'; 

const CharacterInfo = props => {
    return(
        <div className = "content">
            <p><strong>Birth Year:</strong> {props.birthYear}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Eye color:</strong> {props.eyeColor}</p>
            <p><strong>Hair color:</strong> {props.hair}</p>
            <p><strong> Height:</strong> {props.height}</p>
            <p><strong> Mass:</strong> {props.mass}</p>
        </div>
    )
}

export default CharacterInfo;