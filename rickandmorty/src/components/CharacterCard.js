import React from 'react';

const CharacterCard = ({char}) =>{
    console.log(char)
    return (
        <div className="card-container-out">
            <div className="card-container">
                <div className="card-image">
                    <div className={(char.data.results.status === "Dead") ? "dead" : "not-dead"}>
                        <h1>DEAD</h1>
                    </div>
                    <div className="card-name">
                        <h2>{char.results.name}</h2>
                    </div>
                    <div className="card-content">
                        <div className="txt-wrapper">
                            <span>Species</span>
                            <p>{char.results.species}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Gender</span>
                            <p>{char.results.gender}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Origin</span>
                            <p>{char.results.orign.name}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Last Location</span>
                            <p>{char.results.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CharacterCard;