import React from "react";

const NextButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.starwars.Chars}
        </button>
    );
};

export default NextButton;