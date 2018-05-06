import React from 'react';
import './CharsList.css';
import Films from '../Films/Films';
import PropTypes from 'prop-types';


const CharsList = props => {
    return (
        <div class='container'>
            <div class="row justify-content-sm-center mt-sm-4">
            
            {props.chars.map((char,ind) => {
                return (

                    <div class="col-sm-5 mt-sm-4">
                            <div class="card bg-light char-card hovereffect">
                                    <div class="card-body">
                                        <h5 class="card-title">Name: {char.name}</h5>
                                        <p class="card-text">Birth Year: {char.birth_year}</p>
                                        <p class="card-text">Gender: {char.gender}</p>
                                        <p class="card-text">Eye Color: {char.eye_color}</p>
                                        <p class="card-text">Hair Color:{char.hair_color}</p>
                                        <p class="card-text">Height: {char.height}</p>
                                        <p class="card-text">Skin Color: {char.skin_color}</p>
                                        <p><b>Films</b></p>
                                        {char.films.map(film => {
                                                        return <Films filmsData={film} />
                                        })}
                                    </div>
                                </div>
                            </div>
                )
            })}
            </div>
        </div>
    )
}

CharsList.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        birth_year: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired,
    })
};

export default CharsList;