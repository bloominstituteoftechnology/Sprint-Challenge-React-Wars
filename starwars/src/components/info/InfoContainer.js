import React from 'react';
import Name from './Name';
import Films from './Films';
import Demographics from './Demographics';
import ShipsSpecies from './ShipsSpecies';
import './info.css';

const InfoContainer = (props) => {
    return (
        <div className="info-container">
            <div className="name">
                <Name starwarsChars={props.starwarsChars}/>
            </div>
            {/* <section className="bottom">
                <div className="films">
                    <Films starwarsChars={props.starwarsChars}/>
                </div>
                <section className="bottom-right">
                    <div className="demographics">
                        <Demographics starwarsChars={props.starwarsChars} />
                    </div>
                    <div className="ships-species">
                        <ShipsSpecies starwarsChars={props.starwarsChars} />
                    </div>
                </section>
            </section>   */}
        </div>
    )
}

export default InfoContainer;