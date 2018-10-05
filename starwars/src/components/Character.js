import React from 'react'

function Character(props) {
    // console.log(props.characterData);
    const keys = Object.keys(props.characterData);
    // console.log(keys);
    const values = Object.values(props.characterData);
    // console.log(values);
    
        for (let i=0; i<keys.length; i++) {
            console.log(<div>`${keys[i]}:${values[i]}`</div>) ;
        }
    
    
    
    return (
        <div className="character">
            <Factoid key={}
        </div>
    )
}

export default Character;