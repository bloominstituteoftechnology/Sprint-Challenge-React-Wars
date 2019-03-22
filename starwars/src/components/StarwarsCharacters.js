import React from 'react';
import Characters from './Characters';
import ListFrom from './ListForm';

const lukeSkywalker = {
    name: 'Luke Skywalker',
    identity: 'The Chosen One',
};

class StarwarsCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
            characterList: characters,
            name: ''
        };
    }

//     this.setState({
//         characterList: [...this.state.characterList, newCharacter]
//     });
// };

    render() {
    return (
        <div>
            <h1>React Wars</h1>

            <div className="class-list">
                {/* <Characters characterProp={lukeSkywalker} /> */}
                {this.state.characterList.map((characterFromMap, index) => (
                    <Characters key={index} characterProp={characterFromMap} />
                ))}
            </div>
        </div>
    );
}
}

export default StarwarsCharacters;