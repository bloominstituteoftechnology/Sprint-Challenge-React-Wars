import React from 'react'

const Form = props => {
    return (
        <form className="form">
            <input 
                type="text"
                placeholder="Enter Character Name (case sensitive)"
                onChange={props.inputChange}
                name="searchedCharacter"
                value={props.searchedCharacter}
                className="input"
            />

            <button
                onClick={props.buttonClick}
                type="submit"
                className="button"
            >Search Character</button>
        </form>
    )
}

export default Form