import React from 'react';

const PrevButton=prop=>{
    return (
        <div className="waves-effect waves-light btn" onClick={prop.onClick?prop.onClick:null}>Previous</div>
    )
}
export default PrevButton;