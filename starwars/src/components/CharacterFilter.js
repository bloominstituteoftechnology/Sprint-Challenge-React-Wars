import React from 'react';

function CharacterFilter(props) {
    return (

        <form>
            <button onClick={props.robotsOnly}>Exterminate all humans</button> <br></br>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.search}>Bring Them To Me</button>
        </form>
    )
}

export default CharacterFilter;