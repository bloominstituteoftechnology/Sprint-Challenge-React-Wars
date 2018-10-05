import React from "react";

const PageChange = props => {
    return (
        <div>
            <button onClick={props.prevCharacters}>PREVIOUS</button>
            <button onClick={props.nextCharacters}>NEXT</button>
        </div>
    );
}

export default PageChange;