import React from 'react'
import './StarWars.css'


const SWChar = (props) => {
    return (
        <section className="sw-list-container">
            <ul className="ul-names">
                <li className="char-names">{props.name}</li>
                <ul>
                    <li className="char-att"><strong>Height: </strong>{props.height}</li>
                    <li className="char-att"><strong>Mass: </strong>{props.mass}</li>
                    <li className="char-att"><strong>Hair Color: </strong>{props.haircolor}</li>
                    <li className="char-att"><strong>Skin Color: </strong>{props.skincolor}</li>
                    <li className="char-att"><strong>Eye Color: </strong>{props.eyecolor}</li>
                    <li className="char-att"><strong>Birth Year: </strong>{props.birthyear}</li>
                    <li className="char-att"><strong>Gender: </strong>{props.gender}</li>
                </ul>
            </ul>
        </section>
    )
}

export default SWChar