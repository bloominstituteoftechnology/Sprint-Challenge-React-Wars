import React, { useState } from "react";
import NameButton from './NameButton';

const Name = (props) => {
    const [stats, setStats] = useState([])
    
    return (
        <div>
            {stats.map(stat => {
                return <Name key={stat} text={stat} addStats={props.addStats.starwars.Chars} />;
            })}
        </div>
    )
}

export default Name;