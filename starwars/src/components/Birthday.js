import React, { useState } from "react";
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Birthday = (props) => {
    const [stats, setStats] = useState([])

    return <Birthday key={stats} text={stats} setStats={props.setStats} />;
  
}

export default Birthday;