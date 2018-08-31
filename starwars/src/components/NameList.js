import React from 'react';
import Name from './Name';
import './StarWars.css';

function NameList (props) {
    return (
        <div className="mainChar">{props.chars.map(char =><div className="charCard"> <Name key={char.name} char={char}/></div>)}</div>
    )
}

export default NameList;