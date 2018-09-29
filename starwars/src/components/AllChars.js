import React from 'react'
import './StarWars.css'
import Character from './Character';

class AllChars extends React.Component {
    render() {
        return (
            <div>
                {this.props.allChars.map(char => {
                    return (
                        <div>
                            <Character name={char.name} />
                        </div>
                    )
                })}
            </div>
        )
    }

};

export default AllChars;