import React from "react";
// import './CharacterSelect.css';
import Character from './Character';

const CharacterSelect = props => {
    return (
        <div>
            <form //onSubmit={getCharacters}
                >
                <input
                    placeholder='Enter character'
                    value='<Character />'
                />
            </form>
        </div>
    );
}
export default CharacterSelect;