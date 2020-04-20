import React from 'react';

const CharacterCard = (props) =>{
    return (
        <div className="card-container-out">
            <div className="card-container">
                <div className="card-image">
                    <div className={(props.results.status === "Dead") ? "dead" : "not-dead"}>
                        <h1>DEAD</h1>
                    </div>
                    <div className="card-name">
                        <h2>{props.results.name}</h2>
                    </div>
                    <div className="card-content">
                        <div className="txt-wrapper">
                            <span>Species</span>
                            <p>{props.results.species}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Gender</span>
                            <p>{props.results.gender}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Origin</span>
                            <p>{props.results.orign.name}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Last Location</span>
                            <p>{props.results.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}