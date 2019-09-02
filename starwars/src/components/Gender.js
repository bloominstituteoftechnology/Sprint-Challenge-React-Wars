import React, { useState } from "react";
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Gender = (props) => {
    const [stats, setStats] = useState([])

    return <Gender key={stats} text={stats} setStats={props.setStats} />;

}

export default Gender;