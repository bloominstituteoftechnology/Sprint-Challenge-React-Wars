import React from "react";

const PrevButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.starwars.Chars}
        </button>
    );
};

export default PrevButton;