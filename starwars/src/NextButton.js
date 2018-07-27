import React from 'react';

const NextButton=prop=>{
    return (
        <div className="waves-effect waves-light btn" onClick={prop.onClick?prop.onClick:null}>Next</div>
    )
}
export default NextButton;