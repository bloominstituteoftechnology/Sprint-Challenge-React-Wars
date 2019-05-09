import React from 'react';

const CharacterList = (props) => {
    console.log(props.chars)
    return (
        <div className="char-card-container">
            {props.chars.map(char => {
                return (
                    <div className="char-card" key={"starwars__" + char.name}>
                        <h2>{char.name}</h2>
                        <div className="char-stats">
                            <p><strong>Gender: </strong>{char.gender}</p>
                            <p><strong>Birth Year: </strong>{char.birth_year}</p>
                            <p><strong>Hair Color: </strong>{char.hair_color}</p>
                            <p><strong>Height: </strong>{char.height}</p>
                            <p><strong>Mass: </strong>{char.mass}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterList;