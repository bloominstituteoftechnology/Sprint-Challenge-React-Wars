import React, { useState } from "react";
import PrevButton from './PrevButton';
import NextButton from './NextButton';


const Name = (props) => {
    const [stats, setStats] = useState(name)

 return <Name key={stats} text={stats} setStats={props.setStats} />;
    
}

export default Name;