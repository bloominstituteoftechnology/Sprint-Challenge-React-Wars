import React from 'react';
import './StarWars.css';
const InputForm = props => {
    return(
        <form>
            <input
            type="text"
            name="input"
            value={props.value}
            placeholder="Enter Name"
            />
        <button onClick={props.getCharacters}>Search</button>
        </form>
    )
}
export default InputForm;