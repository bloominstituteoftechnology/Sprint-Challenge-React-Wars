import React from 'react';
import './Characters.css';

const CharacterData = props => {
    return (
        <section className='character-container'>
            <div className='character-card'>
                <div className='character-name'>{props.charProps.name}</div>

                    <div className='birthyear-gender'>Gender: <span>{props.charProps.gender}</span></div>
                    <div className='birthyear-gender'>Birth Year: <span>{props.charProps.birth_year}</span></div>
                    <hr />
                    <div className='stats'>Height: <span>{props.charProps.height}</span></div>
                    <div className='stats'>Mass: <span>{props.charProps.mass}</span></div>
                    <hr />
                    <div className='stats'>Hair Color: <span>{ props.charProps.hair_color }</span></div>
                    <div className='stats'>Skin: <span>{ props.charProps.skin_color }</span></div>
                    <div className='stats'>Eye Color: <span>{ props.charProps.eye_color }</span></div>
            </div>
        </section>
    );
}

export default Characters;