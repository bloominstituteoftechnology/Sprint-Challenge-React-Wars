import React from 'react';

const Form = props => {
    return (
        <form className="form-items">
            <button onClick={props.handleButtonLuke}
            >
            Luke Skywalker
            </button>
            <button onClick={props.handleButtonC3po}
            >
            C-3PO
            </button>
        </form>
    );
};

export default Form;