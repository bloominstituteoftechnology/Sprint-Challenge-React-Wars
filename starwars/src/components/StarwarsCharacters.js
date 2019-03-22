import React from 'react';
import Characters from './Characters';

const lukeSkywalker = {
    name: 'Harry Potter',
    identity: 'The Chosen One',
};

function StarwarsCharacters() {
    return (
        <div>
            <h1>React Wars</h1>

            <div className="class-list">
                <Characters characterProp={lukeSkywalker} />
            </div>
        </div>
    );
}

export default StarwarsCharacters;