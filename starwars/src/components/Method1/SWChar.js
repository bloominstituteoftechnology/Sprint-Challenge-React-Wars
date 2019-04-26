import React from 'react'
import '../StarWars2.css'


const SWChar = (props) => {
    return (
        <section className="sw-list-container2">
            <ul className="ul-names2">
                <li className="char-names2">{props.name}</li>
                <ul>
                    <li className="char-att2"><strong>Height: </strong>{props.height}</li>
                    <li className="char-att2"><strong>Mass: </strong>{props.mass}</li>
                    <li className="char-att2"><strong>Hair Color: </strong>{props.haircolor}</li>
                    <li className="char-att2"><strong>Skin Color: </strong>{props.skincolor}</li>
                    <li className="char-att2"><strong>Eye Color: </strong>{props.eyecolor}</li>
                    <li className="char-att2"><strong>Birth Year: </strong>{props.birthyear}</li>
                    <li className="char-att2"><strong>Gender: </strong>{props.gender}</li>
                </ul>
            </ul>
        </section>
    )
}

export default SWChar