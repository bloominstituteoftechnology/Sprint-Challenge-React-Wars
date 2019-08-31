import React from "react";

const GenderButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.starwarsChars}
        </button>
    );
};

export default GenderButton;