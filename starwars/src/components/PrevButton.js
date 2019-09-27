import React from "react";

const PrevButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.data}
        </button>
    );
};

export default PrevButton;