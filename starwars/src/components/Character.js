import React from 'react';

const Character = props => {

    return (
            <div>
            {props.starwarsChars.map((character, i) => {
                return (

                    <div>
                        <p key= {i+1} >{character.name}</p>
                        <p key= {i+1} >{character.gender}</p>
                    </div>
                       
                    )}
            )} 
            </div>
    );

};


export default Character;