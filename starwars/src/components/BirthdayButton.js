import React from "react";

const BirthdayButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.starwarsChars}
        </button>
    );
};

export default BirthdayButton;