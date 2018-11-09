import React from 'react';

function Button(props){
    return(
        <button onClick={
            props.nextPage}>
            next page
            </button>
    )
}

export default Button;