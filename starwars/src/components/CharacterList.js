import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = props => {
    return (
        <div className="characterList">
                {props.starwarsChars.map(item => {
                        <CharacterCard 
                            name= {item.name}
                            gender= {item.gender}
                            birth_year= {item.birth_year}
                            height= {item.height}
                            mass= {item.mass}
                            films= {item.films}
                        />
            })};
        </div>
    );
};

export default CharacterList;