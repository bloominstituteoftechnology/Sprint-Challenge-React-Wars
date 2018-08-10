import React, { Component } from 'react';
import Character from './Character'

class CharacterList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ui>
                    {this.props.character.map((char, index) =>
                        <li> <Character key={index} character={char}/></li>
                    )}
                </ui>
            </div>
        );
    }
}

export default CharacterList;