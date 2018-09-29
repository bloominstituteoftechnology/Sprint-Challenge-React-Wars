// Takes in Characters and Lists them 

import React from 'react';
import Character from './Character';

class CharacterList extends React.Component {
    render () {
        return (
            <div>
                {/* {this.props.starwarsChars.map(char => {
                    return (<Character
                        name = {char.name}
                        height = {char.height}
                        />
                )})} */}
                <Character />
                I am the Character List
            </div>
        )
    }
}

export default CharacterList;