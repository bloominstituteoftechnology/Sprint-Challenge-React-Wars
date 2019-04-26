import React from 'react';
 const NextButton = props => {
    return (
        <button onClick={props.onClick ? props.onClick:null} >Next</button>
    );
}
 export default NextButton;