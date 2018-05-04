import React from 'react';
import {Card, Cardimg, Cardtext, Cardbody} from 'reactstrap';

const Chars = ({ CharacterData }) => {
    return (
        <div >
            <p>{CharacterData.name}</p>
            <p>{CharacterData.height}</p>
        </div>
    )
}

export default Chars;
