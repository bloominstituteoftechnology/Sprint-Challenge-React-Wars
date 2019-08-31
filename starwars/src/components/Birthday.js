import React, { useState } from "react";
import BirthdayButton from './BirthdayButton';

const Birthday = (props) => {
    const [stats, setStats] = useState([])

    return (
        <div>
            {stats.map(stat => {
                return <Birthday key={stat} text={stat} addStats={props.addStats.starwars.Chars} />;
            })}
        </div>
    )
}

export default Birthday;