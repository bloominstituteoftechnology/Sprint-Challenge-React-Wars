import React from 'react';

function Button(props){
    return(
        <div>
            <button onClick={
                props.prevPage}>
                previous page
            </button>
            <button onClick={
                props.nextPage}>
                next page
            </button>
        </div>
    )
}

export default Button;