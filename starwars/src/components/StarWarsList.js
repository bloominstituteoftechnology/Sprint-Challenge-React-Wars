import React from 'react';
import Character from './Character';

const StarWarsList = props => {
        return (
            <div>
                <h1>Star Wars Characters:</h1>
                <div className="char-list">
                    {props.starwarsChars.map((starwarsChars, index) => {
                        return <Character characters={starwarsChars} key={index} />
                    })}
                </div>
            </div>
        )
    }

export default StarWarsList;