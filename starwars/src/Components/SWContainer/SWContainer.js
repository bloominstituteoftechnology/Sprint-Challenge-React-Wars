import React from 'react';
import SWCards from './SWCards';

const SWContainer = (props) => {
    return <div><SWCards {...props.content}/></div>
};

export default SWContainer;