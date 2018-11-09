import React from 'react';
import './character.css';

const Character = props => {
    return(
        <div className='character-data'>
            <h2>{props.singleChar.name}</h2>
            <div className='info'>
                <div className='character-img'>IMAGE HERE</div>
                <div className='info-container'>
                    <p className='category'>YEAR OF BIRTH:</p>
                    <p>{props.singleChar.birth_year}</p>
                    <div className='info-details'>
                        <div className='info-detail'>
                            <div className='individual-detail'>
                                <p className='category'>EYE COLOR:</p>
                                <p>{props.singleChar.eye_color}</p>
                            </div>
                            <div className='individual-detail'>
                                <p className='category'>HAIR COLOR:</p>
                                <p>{props.singleChar.hair_color}</p>
                            </div>
                            <div className='individual-detail'>
                                <p className='category'>SKIN COLOR:</p>
                                <p>{props.singleChar.skin_color}</p>
                            </div>
                            <div className='individual-detail'>
                                <p className='category'>HEIGHT:</p>
                                <p>{props.singleChar.height} cm</p>
                            </div>
                            <div className='individual-detail'>
                                <p className='category'>MASS:</p>
                                <p>{props.singleChar.mass} kg</p>
                            </div>
                            <div className='individual-detail'>
                                <p className='category'>GENDER:</p>
                                <p>{props.singleChar.gender}</p>
                            </div>
                        </div>
                        <div className='info-created-edited'>
                            <p className='category'>DATA CREATED:</p>
                            <p>{props.singleChar.created}</p>
                            <p className='category'>LAST EDITED:</p>
                            <p>{props.singleChar.edited}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;