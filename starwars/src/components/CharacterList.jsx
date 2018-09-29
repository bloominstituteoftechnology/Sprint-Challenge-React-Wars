// Takes in Characters and Lists them 

import React from 'react';
import Character from './Character';

class CharacterList extends React.Component {
    render () {
        return (
            <div>
                {this.props.starwarsChars.map(char => {
                    return (<Character
                        key = {char.created}
                        name = {char.name}
                        height = {char.height}
                        mass = {char.mass}
                        hair_color = {char.hair_color}
                        skin_color = {char.skin_color}
                        eye_color = {char.eye_color}
                        gender = {char.gender}
                        birth_year = {char.birth_year}
                        homeworld = {char.homeworld}
                        films = {char.films}
                        />
                )})}
            </div>
        )
    }
}

export default CharacterList;