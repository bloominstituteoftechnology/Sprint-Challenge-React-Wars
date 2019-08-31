import React, { useState } from "react";

const PeopleStats = (props) => {
    const [stats, setStats] = useState('')
    
    return (
        <div>
            {stats.map(stat => {
                return <PeopleStats key={stat} text={stat} addStats={props.addStats} />;
            })}
        </div>
    )
}

export default PeopleStats;