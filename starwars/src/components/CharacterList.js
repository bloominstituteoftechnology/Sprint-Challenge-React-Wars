import React from 'react'
import Character from './Character'
export default class CharacterList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ui>
                    {this.props.character.map((person, index) =>
                        <li> <Character key={index} character={person}/></li>
                    )}
                </ui>
            </div>
        );
    }
}