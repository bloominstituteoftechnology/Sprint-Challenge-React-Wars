import React from 'react';
import PropTypes from 'prop-types';
import './StarwarsData.css';

    const StarwarsData = props => {

        StarwarsData.proptypes = {
                    props: PropTypes.shape({
                    birth_year: PropTypes.number.isRequired,
                    created: PropTypes.string.isRequired,
                    edited: PropTypes.string.isRequired,
                    eye_color: PropTypes.string.isRequired,
                    films: PropTypes.arrayOf(PropTypes.string.isRequired),
                    gender: PropTypes.string.isRequired,
                    hair_color: PropTypes.string.isRequired,
                    height: PropTypes.string.isRequired,
                    homeworld: PropTypes.string.isRequired,
                    mass: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    skin_color: PropTypes.string.isRequired,
                    species: PropTypes.arrayOf(PropTypes.string.isRequired),
                    starships: PropTypes.arrayOf(PropTypes.string.isRequired),
                    url: PropTypes.string.isRequired,
                    vehicles: PropTypes.arrayOf(PropTypes.string.isRequired),
                })
            }


    const char = props.starwars;

    
    return (
        <div key={char.birth_year + char.created + char.edited + char.eye_color +
            char.films + char.gender + char.hair_color + char.height + char.homeworld +
            char.mass + char.name + char.skin_color + char.species + char.starships +
            char.url + char.vehicles}>
      
        <div className ="container">
        <span className="test">{char.name}</span>
        <span className="test">{char.birth_year}</span>
        <span className="test">{char.created}</span>
        <span className="test">{char.edited}</span>
        <span className="test">{char.eye_color}</span>
        <img src={char.films} alt="films" className="test"></img>
        <span className="test">{char.gender}</span>
        <span className="test">{char.hair_color}</span>
        <span className="test">{char.height}</span>
        <img src={char.homeworld} alt="homeworld" className="test"></img>
        <span className="test">{char.mass}</span>
        <span className="test">{char.skin_color}</span>
        <img src={char.species} alt="species" className="test"></img>
        <img src={char.starships} alt="starships" className="test"></img>
        <img src={char.url} alt="url" className="test"></img>
        <img src={char.vehicles} alt="vehicles" className="test"></img>

        </div>
        </div>    
    );
};


export default StarwarsData;