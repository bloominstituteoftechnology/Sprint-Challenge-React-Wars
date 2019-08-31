import React from "react";

const NameButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.starwarsChars}
        </button>
    );
};

export default NameButton;