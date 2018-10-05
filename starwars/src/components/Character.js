import React from 'react'

function Character(props) {
    // console.log(props.characterData);
    const keys = Object.keys(props.characterData);
    // console.log(keys);
    const values = Object.values(props.characterData);
    // console.log(values);
     
    return (
        <div className="character">
           {keys.map(key => {
              return <div className="datum">{key}: {props.characterData[key]}</div>
           })}
        </div>
    )
}

export default Character;

