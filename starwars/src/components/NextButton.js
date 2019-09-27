import React from "react";

const NextButton = (props) => {
    return (
        <button onClick={() => props.addStats(props.text)}>
            {props.data}
        </button>
    );
};

export default NextButton;