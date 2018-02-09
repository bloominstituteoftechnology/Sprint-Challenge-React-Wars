import React from 'react';
import './CardRight.css';

const CardRight = ({ swChars }) => {
    
    return (
    <div className="card__rightside">

        <div className="films">
        Films:
            <ul className="rightside__ul">
                {swChars.films.map(element => {
                    return(<li><a href={element}>{element}</a></li>);})
                }
            </ul>
        </div>

        <div className="species">
            <ul className="rightside__ul">
                <div>Species:</div> <a href={swChars.species}>{swChars.species}</a>
            </ul>
        </div>

        <div className="vehicles">
                Vehicles:
            <ul className="rightside__ul">
                {swChars.vehicles.map(element => {
                    return(<li><a href={element}>{element}</a></li>);})
                }
            </ul>
        </div>
        <div className="starships">
            Starships:
            <ul className="rightside__ul">
                {swChars.starships.map(element => {
                    return(<li><a href={element}>{element}</a></li>);})
                }
            </ul>        
        </div>

    </div>
    )
}

export default CardRight;