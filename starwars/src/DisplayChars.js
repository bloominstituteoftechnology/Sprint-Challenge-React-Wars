import React from 'react';

export const DisplayChars = (props) => {
    //const { characters } = props;
    return (
        <div>
            {props.characters.map(character => {
                return (
                    <div>
                        <p />
                        <div>Name: {character.name}</div>
                        <div>Height: {character.height}</div>
                        <div>Mass: {character.mass}</div>
                    </div>
                )})
            }
        </div> 
    );

};
