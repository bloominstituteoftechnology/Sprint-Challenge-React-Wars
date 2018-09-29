import React from 'react'
import './StarWars.css'
import Character from './Character';

class AllChars extends React.Component {
    render() {
        return (
            <div className="allChars">
                {this.props.allChars.map(char => {
                    return (
                        <div>
                            <Character 
                                birthYear={char.birth_year}
                                eyeColor={char.eye_color}
                                gender={char.gender}
                                hairColor={char.hair_color}
                                height={char.height}
                                mass={char.mass}
                                skinColor={char.skin_color}
                                name={char.name}
                                cssClasses={this.props.cssClasses}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

};

export default AllChars;