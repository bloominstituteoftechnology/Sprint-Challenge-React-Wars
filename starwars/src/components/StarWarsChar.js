import React from 'react';
import './StarWars.css';
// import HairEyes from '../components/HairEyes';
// import HeightMass from './HeightMass';

const StarWarsChar = (props) => {
    return (
        <div> 
            There is text.
            <div>
                {props.starwarsChars.birth_year}
            </div>

            {props.starwarsChars.map(char => {
                return (
                    <div className="card" key={char.toString()}>
                        <div className="person">
                            {char.name}
                            {char.birth_year}
                            {char.gender}
                        </div>
                        <div className="left-text"> 
                            <li>{char.height}</li>
                            <li>{char.mass}</li>
                        </div>
                        <div className="right-text">
                            <li>{char.hair_color}</li>
                            <li>{char.eye_color}</li>
                        </div>
                        {/* <HairEyes starwarsChars={this.props.state.starwarsChars} /> */}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default StarWarsChar;