import React from 'react';

const charactersForm = props => {
    return (
        <form>
        <button className="btn" onClick={props.handleDisplay}>Characters</button>
        </form>
    );
}