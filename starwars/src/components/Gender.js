import React, { useState } from "react";
import GenderButton from './GenderButton';

const Gender = (props) => {
    const [stats, setStats] = useState([])

    return (
        <div>
            {stats.map(stat => {
                return <Gender key={stat} text={stat} addStats={props.addStats.starwars.Chars} />;
            })}
        </div>
    )
}

export default Gender;